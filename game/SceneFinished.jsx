import Emoji from "../components/Emoji";
import React from "react";
import css from "styled-jsx/css";
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from "../game";

const CSS = css`
    .finished {
        margin-top: 10vh;
        font-size: 4vh;
        text-align: center;
        color: white;
    }

    small {
        font-size: 2vh;
    }

    img {
        max-height: 20vh;
    }
`;

class SceneFinished extends React.Component {
    render() {
        const { points, playerImageUrl } = this.props;

        return (
            <div className="finished">
                <style jsx>{CSS}</style>

                <h1>Congrats!</h1>
                <img src={playerImageUrl} />
                <p>
                    You scored <strong>{points}</strong> points!
                </p>
                <p>
                    <small>Game will reset in a few seconds ...</small>
                </p>
            </div>
        );
    }
}

export default SceneFinished;
