
import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

const CSS = css`
.waiting-to-start {
    margin-top: 25vh;
    font-size: 150px;
    text-align: center;
}

p {
    font-size: 40px;
    color: white;
}
`

class SceneWaitingToStart extends React.Component {

    render () {
        return (
            <div className="waiting-to-start">
                <style jsx>{CSS}</style>

                <Emoji emotion={EMOTION_HAPPY} style={{
                    top: '40px'
                }}/>

                <p>Smile to start the game!</p>
            </div>
        )
    }
}

export default SceneWaitingToStart