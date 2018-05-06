
import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

const CSS = css`
.waiting-to-start {
    margin-top: 0vh;
    font-size: 150px;
    text-align: center;
}

h1 {
    font-size: 5vh;
    color: white;
    margin: 0;
    margin-bottom: 15vh;
    margin-top: 3vh;
}

p {
    font-size: 5vh;
    color: white;
}

p.branding {
    font-size: 3vh;
}

p.pitch {
    font-size: 2vh;
    margin-top: 10vh;
}

.computas {
    transform: scale(1.5) translateY(0.1em);
    width: 4em;
    margin-left: 1.3em;
    margin-right: 1.3em;
}

.google {
    transform: scale(1.4) translateY(0.4em);
    width: 4em;
    margin-left: 1.3em;
    margin-right: 1.3em;
}
`

class SceneWaitingToStart extends React.Component {

    render () {
        return (
            <div className="waiting-to-start">
                <style jsx>{CSS}</style>

                <h1>Crazy Emoji Game</h1>

                <Emoji emotion={EMOTION_HAPPY} style={{
                }}/>

                <p>Smile to start the game!</p>

                <p className="branding">
                    Powered by
                    <img className="computas" src="/static/image/logo-banner.png" />
                    and
                    <img className="google" src="/static/image/google-logo.png" /> Cloud Vision
                </p>

                <p className="pitch">PS. We're hiring!</p>
            </div>
        )
    }
}

export default SceneWaitingToStart