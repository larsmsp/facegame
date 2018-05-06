
import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

const CSS = css`
p {
    font-size: 5vh;
    color: white;
    text-align: center;
}
`

class SceneScreensaver extends React.Component {

    render () {
        return (
            <div className="screensaver">
                <style jsx>{CSS}</style>

                <p className="help">Look at the screen...</p>
            </div>
        )
    }
}

export default SceneScreensaver