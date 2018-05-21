import Emoji from "../components/Emoji";
import DebugControls from "../components/DebugControls";
import React from "react";
import css from "styled-jsx/css";
import { EMOTION_CONTENT } from ".";

const _DefaultState = {
    detectedEmotion: "",
    videoWidth: 0,
    videoHeight: 0
};

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
        color: green;
        font-size: 10px;
        font-family: monospace;
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

class WebcamStream extends React.Component {
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

    _startWebsocketConnection() {}

    _startWebcameCapture() {
        const { videoElement, captureCanvas } = this.refs;

        let _startWebcam = stream => {
            videoElement.srcObject = stream;
            videoElement
                .play()
                .then(() => {
                    this.props.onCameraReady();
                })
                .catch(err => alert(err));
        };

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
        return (
            <div className="status">
                <p>Latency: 655ms</p>
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

export default WebcamStream;
