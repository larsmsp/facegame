import Emoji from "../components/Emoji";
import React from "react";
import css from "styled-jsx/css";
import { DateTime } from "luxon";
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from "../game";

const _DefaultState = {
    lastInputAt: DateTime.local(),
    hasBeenSmilingFor: 0
};

const CSS = css`
    .waiting-to-start {
        margin-top: 0vh;
        font-size: 120px;
        text-align: center;
    }

    h1 {
        font-size: 9vh;
        color: white;
        margin: 0;
        margin-bottom: 10vh;
        margin-top: 3vh;
    }

    p {
        font-size: 5vh;
        color: white;
    }

    .smile-progress {
        border-radius: 50%;
        width: 1px;
        height: 1px;
        background-color: red;
        position: absolute;
        top: 100px;
        left: calc(50% - 64px);
    }

    p.branding {
        font-size: 3vh;
    }

    p.pitch {
        font-size: 2vh;
        margin-top: 10vh;
    }

    .computas {
        transform: scale(1.5) translateY(0.1em);
        width: 4em;
        margin-left: 1.3em;
        margin-right: 1.3em;
    }

    .google {
        transform: scale(1.4) translateY(0.4em);
        width: 4em;
        margin-left: 1.3em;
        margin-right: 1.3em;
    }
`;

class SceneWaitingToStart extends React.Component {
    constructor() {
        super();

        this.state = _DefaultState;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentDidUpdate(prevProps, prevState) {
        // TODO!
        // if (this.props.lastInputEmotion === EMOTION_HAPPY) {
        //     this.setState({
        //         startedSmilingAt: DateTime.local()
        //     });
        //
        //     this._startSmileAnimation();
        // } else {
        //     this.setState({
        //         startedSmilingAt: null
        //     });
        // }
    }

    _startSmileAnimation() {
        if (this._smileAnimation) {
            return;
        }

        this._smileAnimation = requestAnimationFrame(animateSmile);
    }

    _stopSmileAnimation() {
        requestAnim;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="waiting-to-start">
                <style jsx>{CSS}</style>

                <h1>Hello!</h1>

                <Emoji emotion={EMOTION_HAPPY} />
                <div className="smile-progress" />

                <p>Smile to start the game!</p>

                <p className="branding">
                    Powered by
                    <img className="computas" src="/static/image/logo-banner.png" />
                    and
                    <img className="google" src="/static/image/google-logo.png" /> Cloud Vision
                </p>

                <p className="pitch">PS. We're hiring!</p>
            </div>
        );
    }
}

export default SceneWaitingToStart;
