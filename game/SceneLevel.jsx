import Emoji from "../components/Emoji";
import React from "react";
import css from "styled-jsx/css";
import { ALL_EMOTIONS, EMOTION_CONTENT, EMOTION_ANGRY, EMOTION_SAD, EMOTION_HAPPY, EMOTION_SUPRISED } from "../game";
import { DateTime } from "luxon";

const CSS = css`
    .level {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
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
`;

const _DefaultState = {
    emojis: [],
    ending: false,
    startedAt: null
};

class SceneLevel extends React.Component {
    constructor() {
        super();

        this.state = _DefaultState;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        this._setLevel(this.props.level);
    }

    componentDidUpdate(prevProps) {
        if (this.props.lastInputEmotion !== prevProps.lastInputEmotion && this.props.lastInputEmotion !== "") {
            const killCount = this._killAllEmojis(this.props.lastInputEmotion);
            if (killCount > 0) {
                this.props.onScorePoints(killCount, "pop");
            }
        }

        if (prevProps.level !== this.props.level) {
            this._setLevel(this.props.level);
        } else {
            if (this.state.emojis.filter(e => !e.dead).length === 0 && !this.state.ending) {
                this.setState({
                    ending: true
                });

                this.props.onLevelComplete();
            }
        }
    }

    componentWillUnmount() {
        this._stopAnimating();
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    renderEmoji(e, i) {
        return <Emoji key={i} emotion={e.emotion} dead={e.dead} id={"e-" + i} />;
    }

    render() {
        const { level } = this.props;

        return (
            <div className="level">
                <style global jsx>
                    {CSS}
                </style>

                {this.state.emojis.map(this.renderEmoji.bind(this))}

                {/* Hidden Computas logo SVG, used by level 6 to trace out the logo path */}
                <svg style={{ display: "none" }}>
                    <path
                        ref="computasLogoPath"
                        id="path"
                        fill="none"
                        stroke="red"
                        strokeWidth="2.8243"
                        strokeMiterlimit="10"
                        d="M75.8101,45.3015 C75.0921,51.2475 72.8841,56.7335 69.5701,61.3765 C63.2231,70.2685 52.8191,76.0665 41.0611,76.0665 C21.5621,76.0665 5.7881,60.1235 6.0601,40.5635 C6.3281,21.3355 22.3061,5.8065 41.5341,6.0605 C52.9871,6.2125 63.1101,11.8655 69.3871,20.4965 C72.7041,25.0565 74.9451,30.4475 75.7411,36.2995 C75.8471,37.0735 75.2411,37.7625 74.4601,37.7625 L59.4521,37.7625 C58.8601,37.7625 58.3471,37.3585 58.2041,36.7835 C56.2241,28.8525 48.8901,23.0415 40.2621,23.4225 C31.1471,23.8235 23.7481,31.2695 23.4011,40.3855 C23.0171,50.4615 31.0711,58.7505 41.0611,58.7505 C49.5171,58.7505 56.5841,52.8115 58.3221,44.8765 C58.4531,44.2825 58.9731,43.8565 59.5811,43.8565 L74.5271,43.8565 C75.3001,43.8565 75.9021,44.5335 75.8101,45.3015 M76.3321,20.4815 C69.2371,8.3075 56.0441,0.1245 40.9381,0.1245 C18.3291,0.1245 0.0001,18.4525 0.0001,41.0625 C0.0001,63.6715 18.3291,82.0005 40.9381,82.0005 C56.1611,82.0005 69.4421,73.6905 76.4961,61.3615 C79.4861,56.1345 81.3541,50.1855 81.7801,43.8415 C81.8421,42.9225 81.8761,41.9965 81.8761,41.0625 C81.8761,39.9465 81.8301,38.8415 81.7421,37.7475 C81.2401,31.4885 79.3311,25.6295 76.3321,20.4815"
                    />
                </svg>

                {level === 1 ? <p className="help">Make the same face as the Emojis to blow them up!</p> : null}
            </div>
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private methods
    ////////////////////////////////////////////////////////////////////////////

    _startAnimating() {
        this._stopAnimating();
        const animate = () => {
            this._layoutEmojis();
            this._animationFrame = requestAnimationFrame(animate);
        };

        this._animationFrame = requestAnimationFrame(animate);
    }

    _stopAnimating() {
        if (this._animationFrame) {
            cancelAnimationFrame(this._animationFrame);
            this._animationFrame = null;
        }
    }

    _layoutEmojis() {
        const { emojis, startedAt } = this.state;
        const { level } = this.props;

        const tx = DateTime.local().diff(startedAt).milliseconds / 1000;
        const count = emojis.length;
        const computasLogoPathLength = this.refs.computasLogoPath.getTotalLength();

        for (var i = 0; i < count; ++i) {
            const emoji = emojis[i];
            const node = document.getElementById("e-" + i);

            switch (level) {
                case 1:
                    // Wave
                    node.style.top = -11 + Math.cos(tx / 2 + i / 2) * 27 + "vh";
                    node.style.left = i * 10 - 22.5 + "vw";
                    break;

                case 2:
                    // Circle
                    node.style.top = Math.cos(tx / 2 + 360 * i / count) * 30 - 5 + "vh";
                    node.style.left = Math.sin(tx / 2 + 360 * i / count) * 30 + "vw";
                    break;

                case 3: {
                    // Sideways wave
                    const a = i % 2 == 0 ? Math.sin : Math.cos;
                    node.style.top = i * 2.5 - 30 + "vh";
                    node.style.left = a(tx / 2 + i / 2) * 30 + "vw";
                    break;
                }

                case 4: {
                    // Rectangle
                    const col = Math.floor(i % 6);
                    const row = Math.floor(i / 6);

                    const ox = Math.cos(tx) * 5;
                    const oy = Math.sin(tx) * 5;

                    node.style.top = row * 10 - 30 + ox + "vh";
                    node.style.left = col * 10 - 25 + oy + "vw";
                    break;
                }

                case 5: {
                    // Sideways wave
                    const a = i % 2 == 0 ? Math.sin : Math.cos;
                    node.style.top = Math.floor(i / 2) * 5 - 40 + "vh";
                    node.style.left = a(tx + i / 2) * 30 + "vw";
                    break;
                }

                case 6: {
                    // Computas logo
                    let pos = ((i / count + tx / 25) % 1) / 0.99;

                    const pt = this.refs.computasLogoPath.getPointAtLength(
                        pos * this.refs.computasLogoPath.getTotalLength()
                    );

                    node.style.left = pt.x / 1.4 - 30 + "vh";
                    node.style.top = pt.y / 1.4 - 35 + "vh";

                    break;
                }

                default: {
                    const cosx = Math.cos(tx / 4 + 360 * i / count);
                    const cosfx = Math.cos(tx / 4 + 360 * i / count);
                    const sinx = Math.sin(tx + 360 * i / count);
                    const sinfx = Math.sin(tx + 360 * i / count);
                    node.style.top = -10 + cosx * 30 + sinfx * 5 + "vh";
                    node.style.left = sinx * 30 + cosfx * 5 + "vw";
                    break;
                }
            }
        }
    }

    _setLevel(levelNo) {
        const remainingEmojis = this._killAllEmojis("", false, "heavy");

        // Score half points for remaining emojis, to be kind to bad players
        this.props.onScorePoints(Math.floor(remainingEmojis / 2), "");

        // First to levels have less different emoji
        if (levelNo === 1) {
            this._generateEmojis(5, [EMOTION_HAPPY, EMOTION_CONTENT, EMOTION_SUPRISED]);
        } else if (levelNo === 2) {
            this._generateEmojis(11, [EMOTION_HAPPY, EMOTION_CONTENT, EMOTION_SUPRISED, EMOTION_SAD]);
        } else if (levelNo === 3) {
            this._generateEmojis(18 + Math.floor(Math.random() * 5));
        } else if (levelNo === 4) {
            this._generateEmojis(30);
        } else if (levelNo === 5) {
            this._generateEmojis(30);
        } else if (levelNo === 6) {
            this._generateEmojis(35 + Math.floor(Math.random() * 10));
        } else if (levelNo === 7) {
            this._generateEmojis(40 + Math.floor(Math.random() * 10));
        } else {
            this._generateEmojis(40 + Math.floor(Math.random() * 15));
        }

        this.setState({
            ending: false,
            startedAt: DateTime.local()
        });

        this._startAnimating();
    }

    _generateEmojis(count, fromEmotions = ALL_EMOTIONS) {
        let emojis = [];
        for (var i = 0; i < count; ++i) {
            emojis.push({
                emotion: this._randomEmotion(fromEmotions)
            });
        }

        this.setState({
            emojis: emojis
        });
    }

    _killAllEmojis(emotionToKill = "", shouldGivePoints = true, particleEffect = "pop") {
        let emojis = [...this.state.emojis];
        let killCount = 0;
        if (emotionToKill === "") {
            killCount = emojis.filter(e => !e.dead).length;
            emojis = emojis.map((e, i) => this._killEmoji(e, i, shouldGivePoints, particleEffect));
        } else {
            // Kill specific type
            emojis = emojis.map((e, emojiIndex) => {
                if (e.emotion === emotionToKill && !e.dead) {
                    killCount++;
                    return this._killEmoji(e, emojiIndex, shouldGivePoints, particleEffect);
                }

                return e;
            });
        }

        this.setState({
            emojis: emojis
        });

        return killCount;
    }

    _killEmoji(emoji, emojiIndex, shouldGivePoints, particleEffect) {
        if (!emoji.dead) {
            const node = document.getElementById("e-" + emojiIndex);
            this.props.onParticleEffect(node.offsetLeft, node.offsetTop, particleEffect);
        }

        return {
            ...emoji,
            dead: true
        };
    }

    _randomEmotion(fromEmotions = ALL_EMOTIONS) {
        return fromEmotions[Math.floor(Math.random() * fromEmotions.length)];
    }
}

export default SceneLevel;
