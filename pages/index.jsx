import ParticleArea from '../components/ParticleArea'
import Emoji from '../components/Emoji'
import LevelProgressBar from '../components/LevelProgressBar'
import React from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED, SceneWaitingToStart, SceneLevel, SceneFinished, GAME_LENGTH_IN_SECONDS, LEVEL_MAX_LENGTH_IN_SECONDS } from '../game'
import ScoreDisplay from '../components/ScoreDisplay';
import { DateTime } from 'luxon'
import WebcamCapture from '../game/WebcamCapture'

const MODE_WAITING_TO_START = 'WAITING_TO_START'
const MODE_PLAYING_LEVEL = 'PLAYING_LEVEL'
const MODE_FINISHED = 'FINISHED'
const MODE_SHOWING_SCOREBOARD = 'SHOWING_SCOREBOARD'

const _DefaultState = {
    mode: MODE_WAITING_TO_START,
    level: null,
    points: 0,
    lastInputEmotion: EMOTION_CONTENT,
}

const CSS = css`
html, body, #__next, .board {
    height: 100%;
    font-family: Roboto, sans-serif;
}

body {
    background: black;
    margin: 0;
}

.banner-logo {
    position: absolute;
    right: 1vw;
    bottom: 1vh;
    width: 20vw;
}

.game {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 5vh;
}

.waiting-to-start {
    margin: auto;
    top: 50%;
}

.emoji {
    display: block;
    transition: opacity 0.35s linear, transform 0.2s linear;
}

::selection {
    background: transparent;
}
`

class Game extends React.Component {

    constructor() {
        super()

        this.state = _DefaultState
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentWillMount() {
    }

    componentDidMount() {
        this._gameLoopTimer = setInterval(() => {
            this.handleGameTick()
        }, 200)
    }

    componentWillUnmount() {
        clearInterval(this._gameLoopTimer)
    }

    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

    handleGameTick() {
            switch (this.state.mode) {
                case MODE_WAITING_TO_START:
                    this._startIdleReloadTimer()
                    break
                
                case MODE_PLAYING_LEVEL:
                    this._clearIdleReloadTimer()

                    const secondsLeftOfGame = this.state.level.secondsLeftOfGame - 0.2
                    const secondsLeftOfLevel = this.state.level.secondsLeftOfLevel - 0.2

                    if (secondsLeftOfLevel < 0) {
                        this.handleLevelComplete()
                        break
                    }

                    if (secondsLeftOfGame < 0) {
                        this.handleEndGame()
                    }
                    else {
                        this.setState({
                            level: {
                                ...this.state.level,
                                secondsLeftOfGame,
                                secondsLeftOfLevel
                            }
                        })
                    }
                    break

                case MODE_FINISHED:
                    break
                
                default:
                    break
            }
    }

    handleInputEmotion(emotion) {
        switch (this.state.mode) {
            case MODE_WAITING_TO_START:
                if (emotion === EMOTION_HAPPY) {
                    this.handleStartGame()
                }
                break
            
            case MODE_PLAYING_LEVEL:
                if (this.state.lastInputEmotion !== emotion) {
                    this.setState({
                        lastInputEmotion: emotion
                    })
                }
                break
            default: break
        }
    }

    handleParticleEffect(x, y) {
        let particleAccelerator = this.refs.particleArea
        particleAccelerator.createExplosion(x, y)
    }

    handleLevelComplete() {
        const nextLevel = this.state.level.no + 1
        
        if (this._levelCompleteTimer) {
            return
        }

        // Run after slight timeout
        console.warn("Schedule change to level " + nextLevel)
        this._levelCompleteTimer = setTimeout(() => {
            console.warn("Changing to level " + nextLevel)
            this._levelCompleteTimer = null
            this.setState({
                level: {
                    ...this.state.level,
                    no: nextLevel,
                    secondsLeftOfLevel: LEVEL_MAX_LENGTH_IN_SECONDS,
                },
                // Reset input when new level starts
                lastInputEmotion: ''
            })
        }, 100)
    }

    handleStartGame() {
        this.setState({
            mode: MODE_PLAYING_LEVEL,
            points: 0,
            level: {
                startedAt: DateTime.local(),
                secondsLeftOfGame: GAME_LENGTH_IN_SECONDS,
                secondsLeftOfLevel: LEVEL_MAX_LENGTH_IN_SECONDS,
                no: 1
            },
            lastInputEmotion: ''
        })
        this.refs.particleArea.createExplosion(0, 0)
    }

    handleEndGame() {
        // Finish game
        this.setState({
            mode: MODE_FINISHED,
            level: null,
        })

        // Reset game after 5s
        setTimeout(() => {
            this.setState({
                mode: MODE_WAITING_TO_START
            })
        }, 10000)
    }

    handleScorePoints(howMany) {
        this.setState({
            points: this.state.points + howMany
        })
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        const {mode, level, lastInputEmotion, points} = this.state

        let main = null
        let backgroundEffect = null
        switch (mode) {
            case MODE_WAITING_TO_START:
                main = <SceneWaitingToStart />
                backgroundEffect = 'bubbles'
                break

            case MODE_PLAYING_LEVEL:
                main = <SceneLevel level={level.no}
                                   lastInputEmotion={lastInputEmotion}
                                   onScorePoints={this.handleScorePoints.bind(this)}
                                   onLevelComplete={this.handleLevelComplete.bind(this)}
                                   onParticleEffect={this.handleParticleEffect.bind(this)} />
                backgroundEffect = 'bubbles'
                break

            case MODE_FINISHED:
                main = <SceneFinished points={this.state.points} />
                backgroundEffect = 'fireworks'
                break

            default: break
        }

        return (
            <div className="board">
                <style global jsx>{CSS}</style>
                
                <Head>
                    <title>Computas Emoji Game!</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
                    <script src="/static/lib/proton.min.js"/>
                </Head>

                <LevelProgressBar secondsLeft={level ? (level.secondsLeftOfGame || null) : null}
                                  level={level ? level.no : 0}
                                  secondsTotal={GAME_LENGTH_IN_SECONDS}/>

                {level ? <ScoreDisplay score={points}/> : null}

                <div className="game">
                    <ParticleArea ref="particleArea" effect={backgroundEffect} />

                    {main}

                    <img className="banner-logo" src="/static/image/logo-banner.png" />

                    <WebcamCapture onInputEmotion={this.handleInputEmotion.bind(this)} />
                </div>
            </div>
        )
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////////////////////////////////////////

    _startIdleReloadTimer() {
        // Automatically refresh after 2 minutes of nothing happening, so we keep the tab 'fresh'
        if (!this._idleReloadTimer) {
            this._idleReloadTimer = setTimeout(() => {
                document.location.reload()
            }, 120000)
        }
    }

    _clearIdleReloadTimer() {
        if (this._idleReloadTimer) {
            clearInterval(this._idleReloadTimer)
            this._idleReloadTimer = null
        }
    }
}

export default Game