import React from 'react'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

class Emoji extends React.Component
{
    render() {
        const {emotion, dead, ...otherProps} = this.props
        if (dead) {
            return <span className="emoji dead" {...otherProps}>😵</span>
        }

        switch (emotion) {
            case EMOTION_CONTENT: return <span className="emoji" {...otherProps}>😐</span>
            case EMOTION_HAPPY: return <span className="emoji" {...otherProps}>😁</span>
            case EMOTION_SAD: return <span className="emoji" {...otherProps}>😩</span>
            case EMOTION_SUPRISED: return <span className="emoji" {...otherProps}>😲</span>
            case EMOTION_ANGRY: return <span className="emoji" {...otherProps}>😠</span>
            default: return <span className="emoji" {...otherProps}>😈</span>
        }
    }
}

export default Emoji