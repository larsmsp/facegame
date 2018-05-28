import Emoji from "../components/Emoji";
import React from "react";
import css from "styled-jsx/css";
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from "../game";
import { getSetting, SETTING_CATCHPHRASE } from "../util/Settings.js";

const CSS = css`
    p {
        font-size: 5vh;
        color: white;
        text-align: center;
    }
`;

class SceneScreensaver extends React.Component {
    render() {
        return (
            <div className="screensaver">
                <style jsx>{CSS}</style>

                <p className="help">{getSetting(SETTING_CATCHPHRASE)}</p>
            </div>
        );
    }
}

export default SceneScreensaver;
