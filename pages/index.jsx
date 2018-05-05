import ParticleArea from '../components/ParticleArea'
import DebugControls from '../components/DebugControls'
import Emoji from '../components/Emoji'
import LevelProgressBar from '../components/LevelProgressBar'
import React from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED, SceneWaitingToStart, SceneLevel, SceneFinished, GAME_LENGTH_IN_SECONDS } from '../game'
import ScoreDisplay from '../components/ScoreDisplay';
import { DateTime } from 'luxon'

const MODE_WAITING_TO_START = 'WAITING_TO_START'
const MODE_PLAYING_LEVEL = 'PLAYING_LEVEL'
const MODE_FINISHED = 'FINISHED'

const _DefaultState = {
  mode: MODE_WAITING_TO_START,
  level: null,
  points: 0,
  lastInputEmotion: EMOTION_CONTENT,
}

const CSS = css`
html, body, #__next, .board {
  height: 100%;
  font-family: Roboto, sans-serif;
}

body {
  background: black;
  margin: 0;
}

.game {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 5vh;
}

.waiting-to-start {
  margin: auto;
  top: 50%;
}

.emoji {
  display: block;
  transition: opacity 0.2s linear, transform 0.2s linear;
}

::selection {
    background: transparent;
}
`

class Game extends React.Component {

  constructor() {
    super()

    this.state = _DefaultState
  }

  componentWillMount() {
    this._interval = setInterval(() => {
      this.handleGameTick()
    }, 200)
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  ////////////////////////////////////////////////////////////////////////////
  // Event handlers
  ////////////////////////////////////////////////////////////////////////////

  handleGameTick() {
      switch (this.state.mode) {
        case MODE_WAITING_TO_START:
          break
        
        case MODE_PLAYING_LEVEL:
          const secondsLeftOfLevel = this.state.level.secondsLeftOfLevel - 0.2
          if (secondsLeftOfLevel < 0) {
            // Finish game
            this.setState({
              mode: MODE_FINISHED,
              level: null,
            })

            // Reset game after 5s
            setTimeout(() => {
              this.setState({
                mode: MODE_WAITING_TO_START
              })
            }, 5000)
          }
          else {
            this.setState({
              level: {
                ...this.state.level,
                secondsLeftOfLevel
              }
            })
          }
          break

        case MODE_FINISHED:
          break
        
        default:
          break
      }
  }

  handleInputEmotion(emotion) {
    switch (this.state.mode) {
      case MODE_WAITING_TO_START:
        if (emotion === EMOTION_HAPPY) {
          this.setState({
            mode: MODE_PLAYING_LEVEL,
            points: 0,
            level: {
              startedAt: DateTime.local(),
              secondsLeftOfLevel: GAME_LENGTH_IN_SECONDS,
              no: 1
            }
          })
        }
        break
      
      case MODE_PLAYING_LEVEL:
        if (this.state.lastInputEmotion !== emotion) {
          this.setState({
            lastInputEmotion: emotion
          })
        }
        break
      default: break
    }
  }

  handleParticleEffect(x, y) {
    let particleAccelerator = this.refs.particleArea
    particleAccelerator.createExplosion(x, y)
  }

  handleLevelComplete() {
    const nextLevel = this.state.level.no + 1
    setTimeout(() => {
      this.setState({
        level: {
          ...this.state.level,
          no: nextLevel
        }
      })
    }, 1000)
  }

  handleScorePoints(howMany) {
    this.setState({
      points: this.state.points + howMany
    })
  }

  ////////////////////////////////////////////////////////////////////////////
  // Render
  ////////////////////////////////////////////////////////////////////////////

  render() {
    const {mode, level, lastInputEmotion, points} = this.state

    let main = null
    let backgroundEffect = null
    switch (mode) {
      case MODE_WAITING_TO_START:
        main = <SceneWaitingToStart />
        backgroundEffect = 'bubbles'
        break
      case MODE_PLAYING_LEVEL:
        main = <SceneLevel level={level.no}
                           lastInputEmotion={lastInputEmotion}
                           onScorePoints={this.handleScorePoints.bind(this)}
                           onLevelComplete={this.handleLevelComplete.bind(this)}
                           onParticleEffect={this.handleParticleEffect.bind(this)} />
        backgroundEffect = 'bubbles'
        break
      case MODE_FINISHED:
        main = <SceneFinished points={this.state.points} />
        backgroundEffect = 'fireworks'
        break
      default: break
    }

    return (
      <div className="board">
        <style global jsx>{CSS}</style>
        
        <Head>
          <title>Computas Emoji Game!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
          <script src="/static/lib/proton.min.js"/>
        </Head>

        <LevelProgressBar secondsLeft={level ? level.secondsLeftOfLevel : null}
                          secondsTotal={GAME_LENGTH_IN_SECONDS}/>

        {level ? <ScoreDisplay score={points}/> : null}

        <div className="game">
          <ParticleArea ref="particleArea" effect={backgroundEffect} />

          {main}
        </div>

        <DebugControls onInputEmotion={this.handleInputEmotion.bind(this)}/>
      </div>
    )
  }
}

export default Game