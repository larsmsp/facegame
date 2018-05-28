/* global window */
import css from "styled-jsx/css";
import React from "react";
import { WebApp } from "../game";
import { enableUniqueIds } from "react-html-id";
import {
    getSetting,
    setSetting,
    SETTING_CAMERA_DEVICE_ID,
    SETTING_CATCHPHRASE,
    SETTING_RECRUITMENT_TEXT,
    SETTING_PICTURE_QUALITY,
    SETTING_STARTING_PICTURE_FREQUENCY
} from "../util/Settings.js";

const _DefaultState = {
    camerasAvailable: []
};

const CSS = css`
    div {
        color: white;
    }
    .container {
        max-width: 800px;
        margin: auto;
    }

    .control-group {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
    }

    label,
    .help {
        display: block;
    }

    label:after {
        content: ":";
    }

    .help {
        font-size: 12px;
        margin: 4px 0;
    }

    select,
    input {
        display: block;
        height: 22px;
    }

    button {
        margin: auto;
        background-color: green;
        border: none;
        width: 270px;
        padding: 10px 30px;
        display: block;
    }

    .save-button {
        background-color: green;
    }

    .delete-button {
        background-color: #ff6666;
    }
`;

class AdminPage extends React.Component {
    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////
    constructor() {
        super();

        this.state = {
            ..._DefaultState,
            catchphraseText: getSetting(SETTING_CATCHPHRASE),
            recruitmentText: getSetting(SETTING_RECRUITMENT_TEXT),
            pictureQuality: getSetting(SETTING_PICTURE_QUALITY),
            pictureFrequency: getSetting(SETTING_STARTING_PICTURE_FREQUENCY)
        };

        enableUniqueIds(this);
    }

    componentWillMount() {
        if (process.browser) {
            window.navigator.mediaDevices.enumerateDevices().then(devices => {
                const cameras = {};
                devices.forEach(device => {
                    if (device.kind === "videoinput") {
                        cameras[device.deviceId] = device.label;
                    }
                });
                this.setState({
                    camerasAvailable: cameras
                });
            });
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

    handleInputChanged(event) {
        const input = event.target.name;
        this.setState({
            [input]: event.target.value
        });
    }

    handleSave(event) {
        setSetting(SETTING_CATCHPHRASE, this.state.catchphraseText);
        setSetting(SETTING_RECRUITMENT_TEXT, this.state.recruitmentText);
        setSetting(SETTING_PICTURE_QUALITY, Math.max(10, Math.min(90, parseInt(this.state.pictureQuality, 10))));
        setSetting(
            SETTING_STARTING_PICTURE_FREQUENCY,
            Math.max(100, Math.min(5000, parseInt(this.state.pictureFrequency, 10)))
        );

        // Do something
        window.location.pathname = "/";
    }

    handleDeleteHighscores(event) {
        if (confirm("Delete highscores? This cannot be undone")) {
            // Do it!
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        const { camerasAvailable, catchphraseText, recruitmentText, pictureQuality, pictureFrequency } = this.state;
        console.log(catchphraseText);
        return (
            <WebApp>
                <style jsx>{CSS}</style>

                <div className="container">
                    <h1>Administration of the Emoji Game</h1>

                    <div className="control-group">
                        <label htmlFor={this.nextUniqueId()}>Catchphrase on screensaver</label>
                        <input
                            type="text"
                            id={this.lastUniqueId()}
                            name="catchphraseText"
                            value={catchphraseText}
                            onChange={this.handleInputChanged.bind(this)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor={this.nextUniqueId()}>What camera should be used?</label>
                        <select>
                            {Object.values(camerasAvailable).map((deviceName, idx) => (
                                <option key={idx}>{deviceName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="control-group">
                        <label htmlFor={this.nextUniqueId()}>Hiring text</label>
                        <div className="help">(shown under Computas + Google cloud text)</div>
                        <input
                            type="text"
                            id={this.lastUniqueId()}
                            name="recruitmentText"
                            value={recruitmentText}
                            onChange={this.handleInputChanged.bind(this)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor={this.nextUniqueId()}>Picture quality (between 10 and 90)</label>
                        <div className="help">
                            Higher value improves accuracy of the game, but requires more network, default is 75 (good
                            mix between accuracy and bandwidth). Use a lower value if the network is bad.
                        </div>
                        <input
                            type="text"
                            id={this.lastUniqueId()}
                            name="pictureQuality"
                            value={pictureQuality}
                            onChange={this.handleInputChanged.bind(this)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor={this.nextUniqueId()}>Picture frequency in milliseconds</label>
                        <div className="help">
                            How often to capture pictures, lower delay improves responsiveness of game, but requires
                            more network traffic.
                        </div>

                        <input
                            type="text"
                            id={this.lastUniqueId()}
                            name="pictureFrequency"
                            value={pictureFrequency}
                            onChange={this.handleInputChanged.bind(this)}
                        />
                    </div>

                    <div className="">
                        <button className="save-button" onClick={this.handleSave.bind(this)}>
                            Save and return to main screen
                        </button>
                        <button className="delete-button" onClick={this.handleDeleteHighscores.bind(this)}>
                            Delete all highscores
                        </button>
                    </div>
                </div>
            </WebApp>
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////////////////////////////////////////
}

export default AdminPage;
