import Emoji from "../components/Emoji";
import React from "react";
import css from "styled-jsx/css";

const CSS = css``;

class HighscoreBoard extends React.Component {
    ////////////////////////////////////////////////////////////////////////////
    // Lifecycle
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    // Rendering
    ////////////////////////////////////////////////////////////////////////////

    render() {
        const { admin } = this.props;

        return (
            <div className="finished">
                <style jsx>{CSS}</style>

                <h1>Congrats!</h1>
                <img src={playerImageUrl} />
                <p>
                    You scored <strong>{points}</strong> points!
                </p>
                <p>
                    <small>Game will reset in a few seconds ...</small>
                </p>
            </div>
        );
    }
}

export default HighscoreBoard;
