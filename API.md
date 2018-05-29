# API

Client connects to a Websocket on the API server; for example https://computas.appspot.com/faceapi/

All communication is asynchrnous (ie. requests from client do not return any result, the server pushes results to client)

# Requests

Client can send two messages to server, `StartCamera` and `RecognizeImage`.

## StartCamera

Message looks like this:

    {
        "type": "StartCamera",
        "tag": "<arbitrary-string>"
    }

In response the server should start recording on the local camera connected to the server.

Server will periodically capture the camera screen, perform facial crops (and send `FaceCrop` responses)
to the client as well as send the cropped images to the cloud for facial recognition (which will return `RecognitionResult`
responses).

Both types of responses should be tagged with the same `tag` as this request contained, so that
the client can keep track of responses.

The server will continue to record as long as the WebSocket is open. When the socket closes, the
server will stop recording.

## RecognizeImage

Message looks like this:

    {
        "type": "RecognizeImage",
        "tag": "<arbitrary-string>",
        "captureTime": "2015-01-01T02:03",
        "imageBase64": "<base64 encoded image>"
    }

This will trigger the server to try to recognize faces in the image.
The client includes the time the image was captured (to measure ping)

The server will perform facial crop first.

If any faces are detected, the resulting images will both be sent to the client (as `FaceCrop` messages)
as well as sent to the cloud for analysis. Once analysis completes, a `RecognitionResult` message will
be sent to the client. Both messages will be tagged with the same `tag` as the `RecognizeImage` request
contained.

# Responses

There are two possible responses sent from the server (push), `FaceCrop` and `RecognitionResult`.

## FaceCrop

This is sent once the server has detected a face. Either from a `RecognizeImage` request or
from the local camera in a `StartCamera` session.

    {
        "type": "FaceCrop",
        "tag": "<abritrary-string>",
        "captureTime": "2015-01-01T02:03",
        "faces": [{
            "id": "<an id for this face>",
            "base64Image": "<base64 encoded image of the face>"
        }]
    }

*   **tag** will be the same string as sent to `RecognizeImage`/`StartCamera`, client uses this to match the captured image to the response.
*   **captureTime** is the time the image was captured by the server (if `StartCamera`) or the time it was received from the client (if `RecognizeImage`).
*   **faces** is an array of dictionaries containing the cropped faces from the image.

## RecognitionResult

Server sends this once it has received a response from the cloud.

    {
        "type": "RecognitionResult",
        "tag": "<abritrary-string>",
        "captureTime": "2015-01-01T02:03",
        "faces": [{
            "id": "<an id for this face, same as in FaceCrop>",
            "emotion": {
                "Happy": 0.575,
                "Sad": 0.394,
                "Angry": 0.013,
                "Suprised": 0,
                "Content": 0.1
            },
            headwear: 0.0,
            boundingBox: [
                {
                    x: 100,
                    y: 100
                },
                {
                    x: 300,
                    y: 100
                },
                {
                    x: 300,
                    y: 300
                },
                {
                    x: 100,
                    y: 300
                }
            ]
            "faceAttributes": {
                // Raw response data from the cloud
            }
        }]
    }

*   **tag** will be the same string as sent to `RecognizeImage`/`StartCamera`, client uses this to match the captured image to the response.
*   **captureTime** is the time the image was captured by the server (if `StartCamera`) or the time it was received from the client (if `RecognizeImage`).
*   **faces** is an array of dictionaries containing information about the recognized faces. Client uses the emotion array to figure out the primary emotion.
*   **faceAttributes** Is a raw dictionary with the from the cloud API. It's content is dependant on if Azure or Google is used.
