import React from 'react'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

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
            case 'a': this.handleClick(EMOTION_CONTENT); break
            case 's': this.handleClick(EMOTION_HAPPY); break
            case 'd': this.handleClick(EMOTION_SAD); break
            case 'f': this.handleClick(EMOTION_SUPRISED); break
            case 'g': this.handleClick(EMOTION_ANGRY); break
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
                    <button onClick={() => this.handleClick(EMOTION_CONTENT)}>😐</button>
                    <button onClick={() => this.handleClick(EMOTION_HAPPY)}>😁</button>
                    <button onClick={() => this.handleClick(EMOTION_SAD)}>😩</button>
                    <button onClick={() => this.handleClick(EMOTION_SUPRISED)}>😲</button>
                    <button onClick={() => this.handleClick(EMOTION_ANGRY)}>😠</button>
                </div>
            </div>
        )
    }
}

export default DebugControls