import Emoji from '../components/Emoji'
import DebugControls from '../components/DebugControls'
import React from 'react'
import css from 'styled-jsx/css'
import { EMOTION_CONTENT } from '.';

const _DefaultState = {
    detectedEmotion: ''
}

const CSS = css`
.video-area video {
    position: absolute;
    width: 15vw;
    height: 15vh;
    left: 0;
    bottom: 0;
    z-index: 5;
}

.video-area .emoji {
    position: absolute;
    left: 1vw;
    bottom: 0.5vh;
    font-size: 50px;
    z-index: 6;
}
`

class WebcamStream extends React.Component {
    constructor() {
        super()

        this.state = _DefaultState
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        const { videoElement } = this.refs

        let _startWebcam = stream => {

            // var myOnlineCamera    = getElementById('myOnlineCamera'),
            //     canvas            = myOnlineCamera.querySelectorAll('canvas');
    
            videoElement.width = videoElement.offsetWidth
            videoElement.srcObject = stream
            videoElement.play().then(() => {
    
            }).catch(err => alert(err))
    
            /*
            // Click to take the photo
            $('#webcam-popup .takephoto').click(function(){
                // Copying the image in a temporary canvas
                var temp = document.createElement('canvas');
    
                temp.width  = video.offsetWidth;
                temp.height = video.offsetHeight;
    
                var tempcontext = temp.getContext("2d"),
                    tempScale = (temp.height/temp.width);
    
                temp.drawImage(
                    video,
                    0, 0,
                    video.offsetWidth, video.offsetHeight
                );
    
                // Resize it to the size of our canvas
                canvas.style.height = parseInt( canvas.offsetWidth * tempScale );
                canvas.width        = canvas.offsetWidth;
                canvas.height       = canvas.offsetHeight;
                var context         = canvas.getContext("2d"),
                    scale           = canvas.width/temp.width;
                context.scale(scale, scale);
                context.drawImage(bigimage, 0, 0);
            });
            */
        };
    
    
        navigator.getUserMedia({ "video": true }, _startWebcam, error => {
            alert("You must grant video access for the game to work.\n\n" + error.code)
        })
    }

    ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

    handleInputEmotion(emotion) {
        this.setState({
            detectedEmotion: emotion
        })
        this.props.onInputEmotion(emotion)
    }

    ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="video-area">
                <style global jsx>{CSS}</style>
                <video ref="videoElement" />
                <Emoji emotion={this.state.detectedEmotion} />

                <DebugControls onInputEmotion={this.handleInputEmotion.bind(this)}/>
            </div>
        )
    }
}

export default WebcamStream
