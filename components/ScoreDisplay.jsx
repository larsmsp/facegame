import css from "styled-jsx/css";
import React from "react";
import { DateTime } from "luxon";

const _DefaultState = {
    incomingScores: []
};

const SCORE_VISIBLE_FOR_MILLISECONDS = 3000;

const CSS = css`
    .score-display {
        position: absolute;
        top: 7vh;
        left: 4vh;
        font-size: 8vh;
        color: white;
    }

    .score-display p {
        margin: 0;
    }

    .score-display strong {
        font-weight: 900;
    }

    .score-display small {
        margin-left: 0.5em;
        font-size: 2vh;
    }

    .latest-scores {
        padding-left: 0;
        margin: 0;
    }

    .latest-scores li {
        list-style-type: none;
        font-weight: 900;
        opacity: 0;
    }

    .latest-scores li.visible {
        animation-name: new-score;
        animation-duration: 3s;
    }

    @keyframes new-score {
        0% {
            transform: scale(0.2);
            opacity: 0;
        }
        10% {
            transform: scale(2);
            opacity: 1;
        }
        20% {
            transform: scale(1);
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
            opacity: 0;
        }
    }
`;

class ScoreDisplay extends React.Component {
    constructor() {
        super();

        this.state = _DefaultState;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentWillUpdate(nextProps) {
        if (nextProps.score != this.props.score) {
            // Incoming score!
            const now = DateTime.local();
            let gain = nextProps.score - this.props.score;
            let incoming = [...this.state.incomingScores];
            const newIncoming = {
                points: gain,
                addedAt: now,
                visible: true
            };

            // If any of the numbers are old, replace them instead of adding a new one
            let insertedAt = false;
            for (var i = 0; i < incoming.length; ++i) {
                let age = now.diff(incoming[i].addedAt);
                if (age.milliseconds > SCORE_VISIBLE_FOR_MILLISECONDS) {
                    incoming[i] = newIncoming;
                    insertedAt = i;
                    break;
                }
            }

            // Else add a new score
            if (insertedAt === false) {
                insertedAt = incoming.length;
                incoming.push(newIncoming);
            }

            newIncoming.timer = setTimeout(
                this._updateVisibleStatus.bind(this, insertedAt),
                SCORE_VISIBLE_FOR_MILLISECONDS
            );

            this.setState({
                incomingScores: incoming
            });
        }
    }

    componentWillUnmount() {
        const { incomingScores } = this.state;
        for (var i = 0; i < incomingScores.length; ++i) {
            if (incomingScores[i].timer !== null) {
                clearInterval(incomingScores[i].timer);
            }
        }
    }

    _updateVisibleStatus(scoreIndex) {
        // Clean up timers
        const score = this.state.incomingScores[scoreIndex];
        if (score.timer !== null) {
            clearInterval(score.timer);

            const newIncoming = [...this.state.incomingScores];
            newIncoming[scoreIndex] = {
                ...score,
                timer: null,
                visible: false
            };

            this.setState({
                incomingScores: newIncoming
            });
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    renderIncomingScore(score, i) {
        return (
            <li className={score.visible ? "visible" : ""} key={i}>
                +{score.points}
            </li>
        );
    }

    render() {
        const { score } = this.props;

        return (
            <div className="score-display">
                <style global jsx>
                    {CSS}
                </style>

                <p>
                    <strong>{score}</strong>
                    <small>points</small>
                </p>
                <ul className="latest-scores">{this.state.incomingScores.map(this.renderIncomingScore.bind(this))}</ul>
            </div>
        );
    }
}

export default ScoreDisplay;
