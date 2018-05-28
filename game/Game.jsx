import ParticleArea from "../components/ParticleArea";
import { FaceProvider } from "../components/FaceAttributes";
import Emoji from "../components/Emoji";
import LevelProgressBar from "../components/LevelProgressBar";
import React from "react";
import Head from "next/head";
import css from "styled-jsx/css";
import {
    EMOTION_CONTENT,
    EMOTION_ANGRY,
    EMOTION_SAD,
    EMOTION_HAPPY,
    EMOTION_SUPRISED,
    GAME_LENGTH_IN_SECONDS,
    LEVEL_MAX_LENGTH_IN_SECONDS,
    SCREENSAVE_AFTER_SECONDS,
    RELOAD_AFTER_SECONDS,
    CONGRATS_SCREEN_SHOWN_FOR_SECONDS,
    SMILE_FOR_SECONDS_TO_START
} from "./Constants";
import SceneFinished from "./SceneFinished";
import SceneLevel from "./SceneLevel";
import SceneScreensaver from "./SceneScreensaver";
import SceneWaitingToStart from "./SceneWaitingToStart";
import ScoreDisplay from "../components/ScoreDisplay";
import { DateTime } from "luxon";
import WebcamCapture from "./WebcamCapture";

const MODE_LOADING = "LOADING";
const MODE_SCREENSAVER = "SCREENSAVER";
const MODE_WAITING_TO_START = "WAITING_TO_START";
const MODE_PLAYING_LEVEL = "PLAYING_LEVEL";
const MODE_FINISHED = "FINISHED";
const MODE_SHOWING_SCOREBOARD = "SHOWING_SCOREBOARD";

const LOCAL_STORAGE_RESUME_KEY = "resume-at-screensaver";

const _DefaultState = {
    mode: MODE_LOADING,
    level: null,
    points: 0,
    playerImageUrl: null,
    playerFaceAttributes: {},
    lastInputEmotion: EMOTION_CONTENT,
    startedSmilingAt: null,
    multipleFacesDetected: false,
    cameraReady: false,
    particlesReady: true
};

const CSS = css`
    .banner-logo {
        position: absolute;
        right: 1vw;
        bottom: 2vh;
        width: 12vw;
    }

    .game {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 5vh;
    }

    .game h1 {
        color: white;
        text-align: center;
    }

    .waiting-to-start {
        margin: auto;
        top: 50%;
    }

    .emoji {
        display: block;
        transition: opacity 0.35s linear, transform 0.2s linear;
    }

    .multi-face-warning {
        color: red;
        font-size: 50px;
        text-align: center;
        position: absolute;
        bottom: 10vh;
        border: 5px dashed red;
        background-color: white;
        padding: 1vh;
        width: 60vw;
        left: 20vw;
    }

    ::selection {
        background: transparent;
    }
`;

class Game extends React.Component {
    constructor() {
        super();

        this.state = _DefaultState;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentWillMount() {}

    componentWillUpdate(nextProps, nextState) {
        if (
            nextState.cameraReady &&
            nextState.particlesReady &&
            this.state.mode === MODE_LOADING &&
            nextState.mode === MODE_LOADING
        ) {
            let nextMode = MODE_WAITING_TO_START;

            // Resume at screensaver if key is set
            if (window.localStorage.getItem(LOCAL_STORAGE_RESUME_KEY) === "true") {
                nextMode = MODE_SCREENSAVER;
                window.localStorage.setItem(LOCAL_STORAGE_RESUME_KEY, "false");
            }

            this.setState({
                mode: nextMode
            });
        }
    }

    componentDidMount() {
        this._gameLoopTimer = setInterval(() => {
            this.handleGameTick();
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this._gameLoopTimer);
    }

    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

    handleGameTick() {
        let secondsSinceLastInput = 0;
        const { lastInputAt } = this.state;
        if (lastInputAt) {
            secondsSinceLastInput = DateTime.local().diff(lastInputAt).milliseconds;
        }

        switch (this.state.mode) {
            case MODE_SCREENSAVER: {
                if (secondsSinceLastInput > RELOAD_AFTER_SECONDS * 1000) {
                    window.localStorage.setItem(LOCAL_STORAGE_RESUME_KEY, "true");
                    document.location.reload();
                }
                break;
            }

            case MODE_WAITING_TO_START: {
                if (secondsSinceLastInput > SCREENSAVE_AFTER_SECONDS * 1000) {
                    // Go to screensaver
                    this.setState({
                        mode: MODE_SCREENSAVER
                    });
                }
                break;
            }

            case MODE_PLAYING_LEVEL:
                const secondsLeftOfGame = this.state.level.secondsLeftOfGame - 0.2;
                const secondsLeftOfLevel = this.state.level.secondsLeftOfLevel - 0.2;

                if (secondsLeftOfLevel < 0) {
                    this.handleLevelComplete();
                    break;
                }

                if (secondsLeftOfGame < 0) {
                    this.handleEndGame();
                } else {
                    this.setState({
                        level: {
                            ...this.state.level,
                            secondsLeftOfGame,
                            secondsLeftOfLevel
                        }
                    });
                }
                break;

            case MODE_FINISHED:
                break;

            default:
                break;
        }
    }

    handleInputEmotion(emotion, mugshot) {
        this.setState({
            lastInputAt: DateTime.local()
        });

        switch (this.state.mode) {
            case MODE_SCREENSAVER:
                this.setState({
                    mode: MODE_WAITING_TO_START
                });
                break;

            case MODE_WAITING_TO_START:
                if (emotion === EMOTION_HAPPY) {
                    if (this.state.startedSmilingAt === null) {
                        this.setState({
                            startedSmilingAt: DateTime.local(),
                            hasBeenSmilingFor: 0.0
                        });
                    } else {
                        const millisecondsSmiling =
                            this.state.hasBeenSmilingFor +
                            DateTime.local().diff(this.state.startedSmilingAt).milliseconds;

                        if (millisecondsSmiling > SMILE_FOR_SECONDS_TO_START * 1000) {
                            this.handleStartGame(mugshot);
                        } else {
                            this.setState({
                                hasBeenSmilingFor: millisecondsSmiling
                            });
                        }
                    }
                } else {
                    this.setState({
                        startedSmilingAt: null,
                        hasBeenSmilingFor: 0
                    });
                }
                break;

            case MODE_PLAYING_LEVEL:
                if (this.state.lastInputEmotion !== emotion) {
                    this.setState({
                        lastInputEmotion: emotion
                    });
                }

                break;
            default:
                break;
        }
    }

    handleFaceAttributesChanged(attributes) {
        this.setState({
            playerFaceAttributes: attributes
        });
    }

    handleMultipleFaces() {
        if (this._multipleFacesInterval) {
            clearInterval(this._multipleFacesInterval);
        }

        this.setState({
            multipleFacesDetected: true
        });

        this._multipleFacesInterval = setTimeout(() => {
            this._multipleFacesInterval = null;
            this.setState({
                multipleFacesDetected: false
            });
        }, 2500);
    }

    handleCameraReady() {
        this.setState({
            cameraReady: true
        });
    }

    handleParticleEffect(x, y, particleEffect) {
        let particleAccelerator = this.refs.particleArea;
        particleAccelerator.createExplosion(x, y, particleEffect);
    }

    handleLevelComplete() {
        const nextLevel = this.state.level.no + 1;

        if (this._levelCompleteTimer) {
            return;
        }

        // Run after slight timeout
        this._levelCompleteTimer = setTimeout(() => {
            this._levelCompleteTimer = null;
            this.setState({
                level: {
                    ...this.state.level,
                    no: nextLevel,
                    secondsLeftOfLevel: LEVEL_MAX_LENGTH_IN_SECONDS
                }
            });
        }, 100);
    }

    handleStartGame(mugshot) {
        this.refs.particleArea.createExplosion(0, 0, "pop");

        this.setState({
            mode: MODE_PLAYING_LEVEL,
            points: 0,
            playerImageUrl: mugshot,
            level: {
                startedAt: DateTime.local(),
                secondsLeftOfGame: GAME_LENGTH_IN_SECONDS,
                secondsLeftOfLevel: LEVEL_MAX_LENGTH_IN_SECONDS,
                no: 1
            }
        });
    }

    handleEndGame() {
        // Record highscore
        // Highscore.recordHighscore(this.state.playerImageUrl, this.state.level.no, this.state.points);

        // Finish game
        this.setState({
            mode: MODE_FINISHED,
            level: null,
            // Make it so outro is not interrupted immdiately by screensaver
            lastInputAt: DateTime.local().plus({ seconds: 10 }),
            startedSmilingAt: null,
            hasBeenSmilingFor: 0
        });

        // Reset game after 5s
        setTimeout(() => {
            this.setState({
                mode: MODE_WAITING_TO_START,
                playerImageUrl: null
            });
        }, CONGRATS_SCREEN_SHOWN_FOR_SECONDS * 1000);
    }

    handleScorePoints(howMany) {
        this.setState({
            points: this.state.points + howMany
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        const { debug } = this.props;
        const {
            cameraReady,
            particlesReady,
            playerImageUrl,
            playerFaceAttributes,
            mode,
            level,
            lastInputEmotion,
            multipleFacesDetected,
            points
        } = this.state;

        let main = null;
        let backgroundEffect = null;
        switch (mode) {
            case MODE_LOADING:
                main = <h1>Loading ...</h1>;
                break;

            case MODE_SCREENSAVER:
                main = <SceneScreensaver />;
                backgroundEffect = "branding";
                break;

            case MODE_WAITING_TO_START:
                main = (
                    <SceneWaitingToStart
                        lastInputEmotion={lastInputEmotion}
                        onStartGame={this.handleStartGame.bind(this)}
                    />
                );
                backgroundEffect = "bubbles";
                break;

            case MODE_PLAYING_LEVEL:
                main = (
                    <SceneLevel
                        level={level.no}
                        lastInputEmotion={lastInputEmotion}
                        onScorePoints={this.handleScorePoints.bind(this)}
                        onLevelComplete={this.handleLevelComplete.bind(this)}
                        onParticleEffect={this.handleParticleEffect.bind(this)}
                    />
                );
                backgroundEffect = level.no === 2 ? "branding" : "bubbles";
                break;

            case MODE_FINISHED:
                main = <SceneFinished points={this.state.points} playerImageUrl={playerImageUrl} />;
                backgroundEffect = "fireworks";
                break;

            default:
                break;
        }

        return (
            <div className="board">
                <style global jsx>
                    {CSS}
                </style>

                <LevelProgressBar
                    secondsLeft={level ? level.secondsLeftOfGame || null : null}
                    level={level ? level.no : 0}
                    secondsTotal={GAME_LENGTH_IN_SECONDS}
                />

                {multipleFacesDetected ? (
                    <div className="multi-face-warning">Only one player can look at the camera at the time</div>
                ) : null}

                <FaceProvider value={playerFaceAttributes}>
                    {level ? <ScoreDisplay score={points} /> : null}

                    <div className="game">
                        {particlesReady ? <ParticleArea ref="particleArea" effect={backgroundEffect} /> : null}

                        {main}

                        <a href="/admin">
                            <img className="banner-logo" src="/static/image/logo-banner.png" />
                        </a>

                        <WebcamCapture
                            ref="camera"
                            debug={debug}
                            onInputEmotion={this.handleInputEmotion.bind(this)}
                            onFaceAttributesChanged={this.handleFaceAttributesChanged.bind(this)}
                            onMultipleFacesDetected={this.handleMultipleFaces.bind(this)}
                            onCameraReady={this.handleCameraReady.bind(this)}
                        />
                    </div>
                </FaceProvider>
            </div>
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////////////////////////////////////////
}

export default Game;
