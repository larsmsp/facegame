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
  SETTING_STARTING_PICTURE_FREQUENCY,
  SETTING_BACKEND_SERVER,
  SETTING_NET_DETECTION_CALLS,
  SETTING_NET_UPLOADED_BYTES
} from "../util/Settings.js";
import {
  clearHighscores,
  drawWinner,
  removeHighscore
} from "../util/HighscoreService";
import HighscoreBoard from "../components/HighscoreBoard";
import Winner from "../components/Winner";

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
        border-radius: 0;
    }

    input {
        height: 22px;
    }

    select {
        height: 30px;
        -webkit-appearance: none;
        padding: 3px;
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
      camerasAvailable: [],
      winner: null,
      highscores: [],
      catchphraseText: getSetting(SETTING_CATCHPHRASE),
      recruitmentText: getSetting(SETTING_RECRUITMENT_TEXT),
      pictureQuality: getSetting(SETTING_PICTURE_QUALITY),
      selectedCamera: getSetting(SETTING_CAMERA_DEVICE_ID),
      pictureFrequency: getSetting(SETTING_STARTING_PICTURE_FREQUENCY),
      backendServer: getSetting(SETTING_BACKEND_SERVER),
      totalApiCalls: getSetting(SETTING_NET_DETECTION_CALLS),
      totalNetUseMb: parseInt(getSetting(SETTING_NET_UPLOADED_BYTES), 10) / 1024 / 1024
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

        // If chosen camera is no longer set, reset the setting
        if (!cameras[this.state.selectedCamera]) {
          // debugger;
          this.setState({
            selectedCamera: ""
          });
        }

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
    setSetting(SETTING_BACKEND_SERVER, this.state.backendServer);
    setSetting(SETTING_CAMERA_DEVICE_ID, this.state.selectedCamera);

    // Do something
    window.location.pathname = "/";
  }

  handleDraw() {
    this.setState({
      winner: drawWinner()
    });

  }

  handleRemoveHighscore(id) {
    this.setState({
      winner: null
    });
    removeHighscore(id);
  }

  handleDeleteAllHighscores(event) {
    if (confirm("Delete highscores? This cannot be undone")) {
      clearHighscores();
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  // Render
  ////////////////////////////////////////////////////////////////////////////

  render() {
    const {
      camerasAvailable,
      catchphraseText,
      recruitmentText,
      pictureQuality,
      pictureFrequency,
      backendServer,
      totalApiCalls,
      totalNetUseMb,
      selectedCamera
    } = this.state;

    return (
        <WebApp>
          <style jsx>{CSS}</style>

          <div className="container">
            <h1>Administration of the Emoji Game</h1>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Catchphrase on screensaver:</label>
              <input
                  type="text"
                  id={this.lastUniqueId()}
                  name="catchphraseText"
                  value={catchphraseText}
                  onChange={this.handleInputChanged.bind(this)}
              />
            </div>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Hiring text:</label>
              <div className="help">Shown under Computas + Google cloud text</div>
              <input
                  type="text"
                  id={this.lastUniqueId()}
                  name="recruitmentText"
                  value={recruitmentText}
                  onChange={this.handleInputChanged.bind(this)}
              />
            </div>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Camera to use:</label>
              <select
                  id={this.lastUniqueId()}
                  name="selectedCamera"
                  onChange={this.handleInputChanged.bind(this)}
                  value={selectedCamera}>
                <option key={0} value="">
                  Default camera
                </option>
                {Object.keys(camerasAvailable).map(deviceId => {
                  const deviceName = camerasAvailable[deviceId];
                  return (
                      <option key={deviceId} value={deviceId}>
                        {deviceName}
                      </option>
                  );
                })}
              </select>
            </div>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Picture quality (between 10 and 90):</label>
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
              <label htmlFor={this.nextUniqueId()}>Picture frequency in milliseconds:</label>
              <div className="help">
                How often to capture pictures, lower delay improves responsiveness of game, but requires
                more network traffic / API calls. Default is 750.
              </div>

              <input
                  type="text"
                  id={this.lastUniqueId()}
                  name="pictureFrequency"
                  value={pictureFrequency}
                  onChange={this.handleInputChanged.bind(this)}
              />
            </div>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Backend server URL:</label>
              <div className="help">
                ws://localhost:4001 is the default, change to connect to another server for image
                recognition
              </div>
              <input
                  type="text"
                  id={this.lastUniqueId()}
                  name="backendServer"
                  value={backendServer}
                  onChange={this.handleInputChanged.bind(this)}
              />
            </div>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Total Cloud Vision API calls used:</label>
              <input
                  type="text"
                  readOnly
                  id={this.lastUniqueId()}
                  value={
                    totalApiCalls +
                    " / $" +
                    (Math.max(totalApiCalls - 1000, 0) / 1000 * 1.5).toFixed(2) +
                    " / " +
                    (Math.max(totalApiCalls - 1000, 0) / 1000 * 1.5 * 9).toFixed(2) +
                    " NOK"
                  }
              />
            </div>

            <div className="control-group">
              <label htmlFor={this.nextUniqueId()}>Total data traffic to server:</label>
              <input type="text" readOnly id={this.lastUniqueId()} value={totalNetUseMb.toFixed(0) + " MB"} />
            </div>

            <div className="">
              <button className="draw-button" onClick={this.handleDraw.bind(this)}>
                Draw winner
              </button>
              <button className="save-button" onClick={this.handleSave.bind(this)}>
                Save and return to main screen
              </button>

              <button className="delete-button" onClick={this.handleDeleteAllHighscores.bind(this)}>
                Delete all highscores
              </button>
            </div>
          </div>

          <HighscoreBoard onDeleteHighscore={id => this.handleRemoveHighscore(id)} />
          <Winner winner={this.state.winner} onDeleteHighscore={id => this.handleRemoveHighscore(id)} />
        </WebApp>
    );
  }

  ////////////////////////////////////////////////////////////////////////////
  // Private functions
  ////////////////////////////////////////////////////////////////////////////
}

export default AdminPage;
