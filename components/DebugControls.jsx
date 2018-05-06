import React from 'react'
import { ALL_EMOTIONS, ALL_EMOTION_EMOJIS, EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

class DebugControls extends React.Component
{
    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////
    
    componentDidMount() {
        this._keyDownListener = this.handleKeyDown.bind(this)
        document.body.addEventListener('keydown', this._keyDownListener)
    }

    componentWillUnmount() {
        document.body.removeEventListener(this._keyDownListener)        
    }
    
    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////
    
    handleKeyDown(event) {
        switch (event.key) {
            case 'a': this.handleClick(ALL_EMOTIONS[0]); break
            case 's': this.handleClick(ALL_EMOTIONS[1]); break
            case 'd': this.handleClick(ALL_EMOTIONS[2]); break
            case 'f': this.handleClick(ALL_EMOTIONS[3]); break
            case 'g': this.handleClick(ALL_EMOTIONS[4]); break
            default: break
        }
    }

    handleClick(emotion) {
        this.props.onInputEmotion(emotion)
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="panel">
                <style jsx>{`
                .panel {
                    height: 50px;
                    position: absolute;
                    z-order: 1;
                    bottom: 30px;
                    left: 0;
                    right: 0;
                }

                .button-group {
                    margin: auto;
                    width: 250px;
                }

                button {
                    font-size: 30px;
                    display: inline-block;
                    background-color: grey;
                    width: 50px;
                    height: 40px;
                }

                button:focus {
                    outline: none;
                }
                `}</style>
                <div className="button-group">
                    {ALL_EMOTIONS.map(emotion =>
                        <button key={emotion} onClick={() => this.handleClick(emotion)}>{ALL_EMOTION_EMOJIS[emotion]}</button>
                    )}
                </div>
            </div>
        )
    }
}

export default DebugControls