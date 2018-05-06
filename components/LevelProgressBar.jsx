import css from 'styled-jsx/css'
import React from 'react'

const CSS = css`
.level-progress-bar {
    position: relative;
    width: 100vw;
    height: 5vh;
    background: linear-gradient(to right, #CDD180, #529B88);
}

.meter {
    position: absolute;
    left: 0;
    top: 0;
    height: 5vh;
    width: 100vw;
    background: linear-gradient(to right, yellow, red);
    transition: left 0.2s linear, opacity 0.4s ease-in-out;
}

.meter.hidden {
    opacity: 0;
}

p {
    position: absolute;
    left: 2vh;
    top: 0;
    line-height: 5vh;
    margin-top: 0;
    font-size: 2vh;
    font-weight: 400;
    color: white;
}
`


class LevelProgressBar extends React.Component
{
    render() {
        const {secondsLeft, secondsTotal, level} = this.props

        const progress = secondsLeft / secondsTotal * 100

        return (
            <div className="level-progress-bar">
                <style jsx>{CSS}</style>

                {secondsLeft !== null ?
                    [
                        <div key={1} className="meter" style={{left: '-' + progress + 'vw'}}/>,
                        <p key={2}>{secondsLeft.toFixed(0)} seconds remaining, level {level}</p>,
                    ]
                : null}
            </div>
        )
    }
}

export default LevelProgressBar