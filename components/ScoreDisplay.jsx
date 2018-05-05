import css from 'styled-jsx/css'
import React from 'react'

const CSS = css`
.score-display {
    position: absolute;
    top: 2vh;
    left: 2vh;
    font-size: 5vh;
    color: white;
}

strong {
    font-weight: 800;
}

small {
    margin-left: 0.5em;
    font-size: 1vh;
}
`


class ScoreDisplay extends React.Component
{
    render() {
        const {score} = this.props

        return (
            <div className="score-display">
                <style jsx>{CSS}</style>

                <p>
                    <strong>{score}</strong>
                    <small>points</small>
                </p>
            </div>
        )
    }
}

export default ScoreDisplay