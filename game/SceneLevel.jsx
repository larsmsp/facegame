
import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { ALL_EMOTIONS, EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'
import { DateTime } from 'luxon'

const CSS = css`
.level {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
}

.level .emoji {
    position: absolute;
    font-size: 60px;
}

.level .emoji.dead {
    opacity: 0;
}

p.help {
    text-align: center;
    left: -50vw;
    position: relative;
    color: white;
    font-size: 5vh;
    top: 20vh;
}
`

const _DefaultState = {
    emojis: [],
    ending: false,
    startedAt: null
}

class SceneLevel extends React.Component {
    constructor() {
        super()

        this.state = _DefaultState
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////
    
    componentDidMount() {
        this._setLevel(this.props.level)
    }

    componentDidUpdate(prevProps) {
        if (this.props.lastInputEmotion !== prevProps.lastInputEmotion) {
            const killCount = this._killAllEmojis(this.props.lastInputEmotion)
            if (killCount > 0) {
                this.props.onScorePoints(killCount)
            }
        }

        if (prevProps.level !== this.props.level) {
            this._setLevel(this.props.level)
        }
        else {

            if (this.state.emojis.filter(e => !e.dead).length === 0 && !this.state.ending) {
                this.setState({
                    ending: true
                })
    
                this.props.onLevelComplete()
            }
        }
    }

    componentWillUnmount() {
        this._stopAnimating()
    }
    
    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////
    
    renderEmoji(e, i) {
        return (
            <Emoji key={i}
                   emotion={e.emotion}
                   dead={e.dead}
                   id={'e-' + i}
            />
        )
    }

    render () {
        const {level} = this.props

        return (
            <div className="level">
                <style global jsx>{CSS}</style>

                {this.state.emojis.map(this.renderEmoji.bind(this))}

                {level === 1 ?
                <p className="help">Make the same face as the Emojis to blow them up!</p>
                : null}
            </div>
        )
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private methods
    ////////////////////////////////////////////////////////////////////////////
    
    _startAnimating() {
        this._stopAnimating()
        const animate = () => {
            this._layoutEmojis()
            this._animationFrame = requestAnimationFrame(animate)
        }

        this._animationFrame = requestAnimationFrame(animate)
    }

    _stopAnimating() {
        if (this._animationFrame) {
            cancelAnimationFrame(this._animationFrame)
            this._animationFrame = null
        }
    }

    _layoutEmojis() {
        const {emojis, startedAt} = this.state
        const {level} = this.props

        const tx = DateTime.local().diff(startedAt).milliseconds / 1000
        const count = emojis.length

        for (var i = 0; i < count; ++i) {
            const emoji = emojis[i]
            const node = document.getElementById('e-' + i)
            
            switch (level) {
                case 1:
                    // Wave
                    node.style.top  = (-11 +  Math.cos(tx + i / 2) * 27) + 'vh'
                    node.style.left = (i * 10 - 22.5) + 'vw'
                    break

                case 2:
                    // Circle
                    node.style.top  = (Math.cos(tx + 360 * i / count) * 30 - 10) + 'vh'
                    node.style.left = (Math.sin(tx + 360 * i / count) * 30)  + 'vw'
                    break
                
                case 3: {
                    // Sideways wave
                    const a = (i % 2 == 0) ? Math.sin : Math.cos
                    node.style.top  = (i * 2.5 - 30) + 'vh'
                    node.style.left = (a(tx + i / 2) * 30) + 'vw'
                    break
                }

                case 4: {
                    // Rectangle
                    const col = Math.floor(i % 6)
                    const row = Math.floor(i / 6)

                    const ox = Math.cos(tx) * 5
                    const oy = Math.sin(tx) * 5

                    node.style.top  = (row * 10 - 30 + ox) + 'vh'
                    node.style.left = (col * 10 - 25 + oy) + 'vw'
                    break
                }

                case 5: {
                    // Sideways wave
                    const a = (i % 2 == 0) ? Math.sin : Math.cos
                    node.style.top  = (Math.floor(i / 2) * 5 - 30) + 'vh'
                    node.style.left = (a(tx + i / 2) * 30) + 'vw'
                    break
                }

                default:
                    node.style.top  = (-10 + Math.cos(tx + 360 * i / count) * 30) + 'vh'
                    node.style.left = (Math.sin(tx + 360 * i / count) * 30)  + 'vw'
                    break
            }
        }
    }

    _setLevel(levelNo) {
        this._killAllEmojis()
        console.warn("Setting to level: " + levelNo)

        if (levelNo === 1) {
            this._generateEmojis(5, true)
        }
        else if (levelNo === 2) {
            this._generateEmojis(11, true)
        }
        else if (levelNo === 3) {
            this._generateEmojis(18 + Math.floor(Math.random() * 5), true)
        }
        else if (levelNo === 4) {
            this._generateEmojis(30, true)
        }
        else if (levelNo === 5) {
            this._generateEmojis(40, true)
        }
        else {
            this._generateEmojis(50, true)
        }

        this.setState({
            ending: false,
            startedAt: DateTime.local()
        })
        
        this._startAnimating()
    }

    _generateEmojis(count, clearBoard = false) {
        let emojis = clearBoard ? [] : [...this.state.emojis]
        for (var i = 0; i < count; ++i) {
            emojis.push(this._newEmoji())
        }

        this.setState({
            emojis: emojis
        })
    }

    _newEmoji() {
        return {
            emotion: this._randomEmotion()
        }
    }

    _killAllEmojis(emotionToKill = '') {
        let emojis = [...this.state.emojis]
        let killCount = 0
        if (emotionToKill === '') {
            killCount = emojis.filter(e => !e.dead).length
            emojis = emojis.map(this._killEmoji.bind(this))
        }
        else {
            // Kill specific type
            emojis = emojis.map((e, emojiIndex) => {
                if (e.emotion === emotionToKill && !e.dead) {
                    killCount++
                    return this._killEmoji(e, emojiIndex)
                }

                return e
            })
        }

        this.setState({
            emojis: emojis
        })

        return killCount
    }

    _killEmoji(emoji, emojiIndex) {
        if (!emoji.dead) {
            const node = document.getElementById('e-' + emojiIndex)
            this.props.onParticleEffect(node.offsetLeft, node.offsetTop)
        }

        return {
            ...emoji,
            dead: true
        }
    }

    _randomEmotion() {
        return ALL_EMOTIONS[Math.floor(Math.random() * ALL_EMOTIONS.length)]
    }
}

export default SceneLevel