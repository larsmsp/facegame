import React from "react";
import Head from "next/head";
import css from "styled-jsx/css";
import { Game } from "../game";
import { resetUniqueIds } from "react-html-id";
import * as _ from "lodash";

const CSS = css`
    html,
    body,
    #__next,
    .board {
        height: 100%;
        font-family: Roboto, sans-serif;
    }

    body {
        background: black;
        margin: 0;
    }
`;

class WebApp extends React.Component {
    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentWillMount() {
        resetUniqueIds();

        if (process.browser) {
            // Always reload the page after the window is resized, many calculations in the game depend on window size being the same
            window.addEventListener(
                "resize",
                _.debounce(() => {
                    window.location.reload();
                }, 1000)
            );
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="board">
                <style global jsx>
                    {CSS}
                </style>

                <Head>
                    <title>Computas Emoji Game!</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
                    <script src="/static/lib/proton.min.js" />
                </Head>

                {this.props.children}
            </div>
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////////////////////////////////////////
}

export default WebApp;
