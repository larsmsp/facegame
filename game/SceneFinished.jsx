
import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

const CSS = css`
.finished {
    margin-top: 25vh;
    font-size: 4vh;
    text-align: center;
    color: white;
}

small {
    font-size: 2vh;
}
`

class SceneFinished extends React.Component {

    render () {
        const {points} = this.props
        return (
            <div className="finished">
                <style jsx>{CSS}</style>

                <h1>Congrats!</h1>
                <p>You scored <strong>{points}</strong> points!</p>
                <p><small>Game will reset in a few seconds ...</small></p>
            </div>
        )
    }
}

export default SceneFinished