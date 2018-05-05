
import Emoji from '../components/Emoji'
import React from 'react'
import css from 'styled-jsx/css'
import { ALL_EMOTIONS, EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from '../game'

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
`

const _DefaultState = {
    emojis: [],
    ending: false
}

class SceneLevel extends React.Component {
    constructor() {
        super()

        this.state = _DefaultState
    }

    componentDidMount() {
        this._setLevel(this.props.level)
    }

    componentDidUpdate(prevProps) {
        console.dir('level ' + prevProps.level + ' != ' + this.props.level)
        if (prevProps.level !== this.props.level) {
            this._setLevel(this.props.level)
        }

        if (this.props.lastInputEmotion !== prevProps.lastInputEmotion) {
            const killCount = this._killAllEmojis(this.props.lastInputEmotion)
            if (killCount > 0) {
                this.props.onScorePoints(killCount)
            }
        }

        if (this.state.emojis.filter(e => !e.dead).length === 0 && !this.state.ending) {
            this.setState({
                ending: true
            })

            this.props.onLevelComplete()
        }
    }

    renderEmoji(e, i) {
        return (
            <Emoji key={i}
                   emotion={e.emotion}
                   dead={e.dead}
                   style={{
                        left: e.x + 'vw',
                        top: e.y + 'vh',
                    }}
            />
        )
    }

    render () {
        return (
            <div className="level">
                <style global jsx>{CSS}</style>

                {this.state.emojis.map(this.renderEmoji.bind(this))}
            </div>
        )
    }

    _setLevel(levelNo) {
        this._killAllEmojis()
        if (levelNo === 1) {
            this._generateEmojis(5)
        }
        else if (levelNo === 2) {
            this._generateEmojis(10)
        }
        else if (levelNo === 3) {
            this._generateEmojis(20)
        }
        else if (levelNo === 4) {
            this._generateEmojis(30)
        }
        else if (levelNo === 5) {
            this._generateEmojis(40)
        }
        else {
            this._generateEmojis(50)
        }
        this.setState({
            ending: false
        })
    }

    _generateEmojis(count) {
        let emojis = [...this.state.emojis]
        for (var i = 0; i < count; ++i) {
            emojis.push(this._newEmoji())
        }

        this.setState({
            emojis: emojis
        })
    }

    _newEmoji() {
        return {
            emotion: this._randomEmotion(),
            x: -30 + Math.random() * 60,
            y: -30 + Math.random() * 60,
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
            emojis = emojis.map(e => {
                if (e.emotion === emotionToKill && !e.dead) {
                    killCount++
                    return this._killEmoji(e)
                }

                return e
            })
        }

        this.setState({
            emojis: emojis
        })

        return killCount
    }

    _killEmoji(emoji) {
        if (!emoji.dead) {
            this.props.onParticleEffect(emoji.x, emoji.y)
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