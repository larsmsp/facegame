import React from "react";
import { ALL_EMOTION_EMOJIS, ALL_EMOTIONS } from "../game";

class Emoji extends React.Component {
    render() {
        const { emotion, dead, ...otherProps } = this.props;
        if (dead) {
            return (
                <span className="emoji dead" {...otherProps}>
                    😵
                </span>
            );
        }

        const emoji = ALL_EMOTION_EMOJIS[emotion];
        if (emoji) {
            return (
                <span className="emoji" {...otherProps}>
                    {ALL_EMOTION_EMOJIS[emotion]}
                </span>
            );
        }

        return (
            <span className="emoji" {...otherProps}>
                😈
            </span>
        );
    }
}

export default Emoji;
