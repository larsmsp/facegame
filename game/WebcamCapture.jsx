import Emoji from "../components/Emoji";
import DebugControls from "../components/DebugControls";
import React from "react";
import css from "styled-jsx/css";
import { ALL_EMOTIONS, EMOTION_CONTENT } from ".";
import uuidv4 from "uuid/v4";

const _DefaultState = {
    socketReady: false,
    cameraReady: false,

    detectedEmotion: "",
    videoWidth: 0,
    videoHeight: 0,
    latency: 0,
    headwearLikelihood: 0,
    totalImageSize: 0,
    lastInputAt: null
};

const INITIAL_CAPTURE_INTERVAL = 700;
const CAPTURE_QUALITY = 0.5; // Between 0 and 1
const HEADWEAR_DETECTION_THRESHOLD = 0.12;
const IDLE_TIMEOUT = 0;

const CSS = css`
    .video-area video,
    .video-area .last-capture {
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
                this._captureInterval = setTimeout(this._captureAndRecognize.bind(this), INITIAL_CAPTURE_INTERVAL);
            }
        }

        // Update headwear status if confidence is greater than the threshold
        if (
            prevState.headwearLikelihood <= HEADWEAR_DETECTION_THRESHOLD &&
            this.state.headwearLikelihood > HEADWEAR_DETECTION_THRESHOLD
        ) {
            this.props.onFaceAttributesChanged({
                wearingHeadwear: true
            });
        } else if (
            prevState.headwearLikelihood > HEADWEAR_DETECTION_THRESHOLD &&
            this.state.headwearLikelihood <= HEADWEAR_DETECTION_THRESHOLD
        ) {
            this.props.onFaceAttributesChanged({
                wearingHeadwear: false
            });
        }
    }

    componentWillUnmount() {
        this._stopWebsocketConnection(false);
    }

    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

    handleInputEmotion(emotion) {
        this.setState({
            detectedEmotion: emotion
        });

        // If no input for ten seconds, clear the input
        if (this._idleInputTimer) {
            clearInterval(this._idleInputTimer);
        }
        this._idleInputTimer = setTimeout(this.handleFaceDisappeared.bind(this), 5000);

        this.props.onInputEmotion(emotion, this._captureImage());
    }

    handleFaceDisappeared() {
        // Clear timer
        this._idleInputTimer = null;

        this.setState({
            detectedEmotion: ""
        });

        this.props.onInputEmotion("", null);
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

    handleWebsocketPacket(packet) {
        switch (packet.type) {
            case "Hello":
                // Server connected, yay!
                break;

            case "RecognitionResult":
                if (packet.faces.length > 1) {
                    this.props.onMultipleFaces();
                }

                if (packet.faces.length > 0) {
                    // Pick first face, and top emotion detected
                    const face = packet.faces[0];
                    let topEmotion = {
                        emotion: EMOTION_CONTENT,
                        likeliness: 0
                    };

                    for (const emotionName of ALL_EMOTIONS) {
                        const emotionLikeliness = face.emotion[emotionName];
                        if (emotionLikeliness > topEmotion.likeliness) {
                            topEmotion = {
                                emotion: emotionName,
                                likeliness: emotionLikeliness
                            };
                        }
                    }

                    const captureTime = new Date(packet.captureTime);
                    const now = new Date();
                    this.setState({
                        latency: now.getTime() - captureTime.getTime(),
                        // Floating average of headwear likelihood
                        headwearLikelihood: this.state.headwearLikelihood * 0.7 + face.headwear * 0.3
                    });

                    this.handleInputEmotion(topEmotion.emotion);
                }
                break;

            default:
                console.warn(`Unknown packet from server: ${packet.type}`);
        }
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
                    <p className="good">
                        Latency {this.state.latency} ms, {(this.state.totalImageSize / 1024).toFixed(0) + " KB"},{" "}
                        {this.state.headwearLikelihood.toFixed(2)}
                    </p>
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

                <video ref="videoElement" style={{ opacity: detectedEmotion === "" ? 1 : 0 }} />
                <img
                    className="last-capture"
                    src={lastCapturedImageUrl}
                    style={{ opacity: detectedEmotion === "" ? 0 : 1 }}
                />

                <Emoji emotion={detectedEmotion} />

                {this.renderStatus()}

                <canvas ref="captureCanvas" />

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
        const mugshot = this._canvasContext.canvas.toDataURL("image/jpeg", CAPTURE_QUALITY);
        this.setState({
            lastCapturedImageUrl: mugshot
        });

        return mugshot;
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
                this.handleWebsocketPacket(JSON.parse(event.data));
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

        // Record total size sent
        this.setState({
            totalImageSize: this.state.totalImageSize + msg.imageBase64.length
        });

        this._socket.send(JSON.stringify(msg));

        const rescheduleIn = this.state.latency * 0.5 + INITIAL_CAPTURE_INTERVAL * 0.5;
        setTimeout(this._captureAndRecognize.bind(this), rescheduleIn);
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

        // TODO: Allow selection of input device
        navigator.mediaDevices.enumerateDevices().then(function(devices) {
            devices.forEach(function(device) {
                if (device.kind === "videoinput") {
                    console.log(device.label + " id = " + device.deviceId);
                }
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
}

export default WebcamCapture;
