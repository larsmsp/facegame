import React from "react";
import { FaceConsumer } from "./FaceAttributes";
import { ALL_EMOTION_EMOJIS, ALL_EMOTIONS, EMOTION_HAPPY } from "../game";

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
        if (emotion === EMOTION_HAPPY) {
            return (
                <FaceConsumer>
                    {faceAttributes => {
                        return (
                            <span className="emoji" {...otherProps}>
                                {faceAttributes.wearingHeadwear ? "🤠" : emoji}
                            </span>
                        );
                    }}
                </FaceConsumer>
            );
        } else if (emoji) {
            return (
                <span className="emoji" {...otherProps}>
                    {emoji}
                </span>
            );
        }

        return (
            <span className="emoji" {...otherProps}>
                😴
            </span>
        );
    }
}

export default Emoji;
