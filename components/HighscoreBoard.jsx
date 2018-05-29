import Emoji from "../components/Emoji";
import React from "react";
import css from "styled-jsx/css";
import { getTopHighscoresWithImages } from "../util/HighscoreService";

const CSS = css`
    .highscore-board {
        position: absolute;
        top: 1vh;
        right: 0;
        width: 17vh;
    }

    h2 {
        text-align: center;
        color: white;
    }

    ul {
        padding: 0;
    }

    li {
        position: relative;
        list-style-type: none;
    }

    .avatar {
        width: 17vh;
        height: 17vh;
    }

    .level,
    .points {
        position: absolute;
        z-index: 15;
        left: 0;
        right: 0;
        color: white;
        font-size: 1.5vh;
        font-weight: bold;
    }

    .level {
        bottom: 1vh;
        right: 1vh;
        text-align: right;
    }

    .points {
        top: 1vh;
        left: 1vh;
        text-align: left;
    }

    strong {
        font-size: 3vh;
    }
`;

class HighscoreBoard extends React.Component {
    ////////////////////////////////////////////////////////////////////////////
    // Lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentWillMount() {
        this.setState({
            highscoreList: getTopHighscoresWithImages()
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    // Rendering
    ////////////////////////////////////////////////////////////////////////////

    render() {
        const { admin } = this.props;
        const { highscoreList } = this.state;

        return (
            <section className="highscore-board">
                <style jsx>{CSS}</style>

                <h2>Highscores</h2>
                <ul>
                    {highscoreList.map(h => (
                        <li key={h.id}>
                            <img className="avatar" src={h.playerImageUrl} />
                            <span className="level">
                                level<strong>{" " + h.levelNo}</strong>
                            </span>
                            <span className="points">
                                <strong>{h.points + " "}</strong>points
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default HighscoreBoard;
