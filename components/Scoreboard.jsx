import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

const CSS = css`
.score-board {
    
}
`

class SceneFinished extends React.Component {

    render () {
        return (
            <div className="score-board">
            </div>
        )
    }
}