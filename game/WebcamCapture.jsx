import Emoji from "../components/Emoji";
import DebugControls from "../components/DebugControls";
import React from "react";
import css from "styled-jsx/css";
import { EMOTION_CONTENT } from ".";
import uuidv4 from "uuid/v4";

const _DefaultState = {
    socketReady: false,
    cameraReady: false,

    detectedEmotion: "",
    videoWidth: 0,
    videoHeight: 0
};

const INITIAL_CAPTURE_INTERVAL = 2500;

const CSS = css`
    .video-area video {
        position: absolute;
        width: 15vw;
        height: 15vh;
        left: 0;
        bottom: 0;
        z-index: 5;
        transform: rotateY(180deg);
    }

    .video-area .emoji {
        position: absolute;
        left: 1vw;
        bottom: 0.5vh;
        font-size: 50px;
        z-index: 6;
    }

    .video-area .status {
        position: absolute;
        left: 16vw;
        bottom: 0.5vh;
        font-size: 10px;
        font-family: monospace;
    }

    .video-area .status .bad {
        color: red;
    }

    .video-area .status .good {
        color: green;
    }

    .video-area canvas {
        visibility: hidden;
    }

    .last-capture {
        position: absolute;
        left: 15vw;
        bottom: 0;
        background-color: white;
    }
`;

class WebcamCapture extends React.Component {
    constructor() {
        super();

        this._canvasContext = null;
        this.state = _DefaultState;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Public methods
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        this._startWebcameCapture();
        this._startWebsocketConnection();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cameraReady === false || prevState.socketReady === false) {
            if (this.state.cameraReady && this.state.socketReady) {
                this._captureInterval = setInterval(this._captureAndRecognize.bind(this), 2500);
            }
        }
    }

    componentWillUnmount() {
        this._stopWebsocketConnection(false);
    }

    _stopWebsocketConnection(updateState = true) {
        if (this._captureInterval) {
            clearInterval(this._captureInterval);
            this._captureInterval = null;
        }

        if (this._socket) {
            console.warn("Closing websocket connection...");
            this._socket.close();
            this._socket = null;
        }

        if (updateState) {
            this.setState({
                socketReady: false
            });
        }
    }

    handleWebsocketError(error) {
        this._stopWebsocketConnection();

        // Attempty new connection ASAP
        if (!this._retrySocketTimeout) {
            this._retrySocketTimeout = setTimeout(() => {
                this._retrySocketTimeout = null;
                this._startWebsocketConnection();
            }, 2500);
        }
    }

    _startWebsocketConnection() {
        try {
            const socket = new WebSocket("ws://" + document.location.hostname + ":4001/", "face");

            // Connection error
            socket.addEventListener("error", event => {
                console.error("Websocket connection error, retrying in 2 seconds...");
                this.handleWebsocketError(event.error);
            });

            // Connection closed
            socket.addEventListener("close", event => {
                console.warn("Websocket connection closed");
                this._stopWebsocketConnection();

                // Retry again soon
                if (!this._retrySocketTimeout) {
                    this._retrySocketTimeout = setTimeout(() => {
                        this._retrySocketTimeout = null;
                        this._startWebsocketConnection();
                    }, 1000);
                }
            });

            // Connection opened
            socket.addEventListener("open", event => {
                console.warn("Websocket connection opened");
                this._socket = socket;
                this.setState({
                    socketReady: true
                });
            });

            // Listen for messages
            socket.addEventListener("message", event => {
                console.log("Message from server ", event.data);
            });
        } catch (error) {
            // Retry after timeout
            console.error(error);
        }
    }

    _captureAndRecognize() {
        // Socket and camera available, update with cool stuff!
        const msg = {
            type: "RecognizeImage",
            tag: uuidv4(),
            captureTime: new Date().toISOString(),
            imageBase64: this._captureImage()
        };

        this._socket.send(JSON.stringify(msg));
    }

    _startWebcameCapture() {
        const { videoElement, captureCanvas } = this.refs;

        let _startWebcam = stream => {
            videoElement.srcObject = stream;
            videoElement
                .play()
                .then(() => {
                    this.setState({
                        cameraReady: true
                    });

                    this.props.onCameraReady();
                })
                .catch(err => alert(err));
        };

        navigator.mediaDevices.enumerateDevices().then(function(devices) {
            devices.forEach(function(device) {
                console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
            });
        });

        navigator.getUserMedia(
            {
                video: {
                    mandatory: {
                        minWidth: 1280,
                        minHeight: 720
                    }
                }
            },
            _startWebcam,
            error => {
                alert("You must grant video access for the game to work.\n\n" + error.code);
            }
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

    handleInputEmotion(emotion) {
        this.setState({
            detectedEmotion: emotion
        });
        this.props.onInputEmotion(emotion, this._captureImage());
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    renderStatus() {
        let badStatus = [];

        if (!this.state.socketReady) {
            badStatus.push("No network connection");
        }
        if (!this.state.cameraReady) {
            badStatus.push("No camera");
        }

        if (badStatus.length === 0) {
            return (
                <div className="status">
                    <p className="good">Latency xxx ms</p>
                </div>
            );
        }

        return (
            <div className="status">
                {badStatus.map((status, statusIndex) => (
                    <p key={statusIndex} className="bad">
                        {status}
                    </p>
                ))}
            </div>
        );
    }

    render() {
        const { detectedEmotion, lastCapturedImageUrl, videoHeight, videoWidth } = this.state;
        const { debug } = this.props;
        return (
            <div className="video-area">
                <style global jsx>
                    {CSS}
                </style>

                <video ref="videoElement" />

                <Emoji emotion={detectedEmotion} />

                {this.renderStatus()}

                <canvas ref="captureCanvas" />
                {debug && false ? (
                    <img
                        className="last-capture"
                        src={lastCapturedImageUrl}
                        style={{ width: videoWidth + "px", height: videoHeight + "px" }}
                    />
                ) : null}

                {debug ? <DebugControls onInputEmotion={this.handleInputEmotion.bind(this)} /> : null}
            </div>
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private methods
    ////////////////////////////////////////////////////////////////////////////

    _captureImage() {
        const { captureCanvas, videoElement } = this.refs;

        // Create context if this is first capture
        if (!this._canvasContext) {
            captureCanvas.width = videoElement.videoWidth;
            captureCanvas.height = videoElement.videoHeight;
            this._canvasContext = captureCanvas.getContext("2d");

            this.setState({
                videoWidth: videoElement.videoWidth,
                videoHeight: videoElement.videoHeight
            });
        }

        this._canvasContext.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight);
        const mugshot = this._canvasContext.canvas.toDataURL("image/jpeg", 0.9);
        this.setState({
            lastCapturedImageUrl: mugshot
        });

        return mugshot;
    }
}

export default WebcamCapture;
