const fs = require("fs");
const imageDataURI = require("image-data-uri");
const uuidv4 = require("uuid/v4");
const GoogleVision = require("@google-cloud/vision");
const Express = require("express");
const ExpressWs = require("express-ws");
const Opn = require("Opn");

// Creates a client
const googleVisionClient = new GoogleVision.ImageAnnotatorClient({
    keyFilename: "vision-service-account.json"
});

const PORT = 4001;

const WebServer = Express();

// Serve the static output
WebServer.use(Express.static("out"));
ExpressWs(WebServer);

function googleLikelihoodToNumber(likelyhood) {
    switch (likelyhood) {
        case "VERY_LIKELY":
            return 1;
        case "LIKELY":
            return 0.75;
        case "POSSIBLE":
            return 0.5;
        case "UNLIKELY":
            return 0.25;
        case "VERY_UNLIKELY":
            return 0;
        default:
            return 0.1;
    }
}

function performFaceDetection(request, sendPacket) {
    // Make a call to the Vision API to detect the faces
    googleVisionClient
        .faceDetection({ image: { content: request.image.dataBase64 } })
        .then(results => {
            const faces = results[0].faceAnnotations;
            var numFaces = faces.length;
            const faceId = uuidv4();
            console.log("Found " + numFaces + (numFaces === 1 ? " face" : " faces"));

            // Crop out the first face
            if (numFaces > 0) {
                // console.dir(faces[0]);
                /*
                WAAAY to much work to clip images in node, man.
                Clipper(image.dataBase64, function() {
                    this.crop(200, 200, 200, 200)
                        .resize(128, 128)
                        .quality(80)
                        .toDataUrl(dataUrl => {
                            sendPacket({
                                type: "FaceCrop",
                                tag: request.tag,
                                captureTime: request.captureTime,
                                faces: [
                                    {
                                        id: faceId,
                                        base64Image: dataUrl
                                    }
                                ]
                            });
                        });
                });
                */
            }

            sendPacket({
                type: "RecognitionResult",
                tag: request.tag,
                captureTime: request.captureTime,
                faces: faces.map(face => {
                    return {
                        id: faceId,
                        emotion: {
                            Happy: googleLikelihoodToNumber(face.joyLikelihood),
                            Sad: googleLikelihoodToNumber(face.sorrowLikelihood),
                            Angry: googleLikelihoodToNumber(face.angerLikelihood),
                            Suprised: googleLikelihoodToNumber(face.surpriseLikelihood),
                            Content: 0.1 // Client will pick most likely, which will be this if the others have low detection value
                        },
                        boundingBox: face.boundingPoly.vertices,
                        headwear: googleLikelihoodToNumber(face.headwearLikelihood),
                        faceAttributes: face
                    };
                })
            });
        })
        .catch(err => {
            console.error("ERROR:", err);
            callback(err);
        });
}

WebServer.ws("/", function connection(socket) {
    socket.on("message", function incoming(message) {
        const packet = JSON.parse(message);

        switch (packet.type) {
            case "RecognizeImage":
                console.log(`RecognizeImage - ${packet.imageBase64.length} bytes`);
                const image = imageDataURI.decode(packet.imageBase64);

                // imageDataURI.outputFile(packet.imageBase64, "tmp-captures/faceimage-" + new Date().getTime() + ".jpg");
                performFaceDetection(
                    {
                        image: image,
                        tag: packet.tag,
                        captureTime: packet.captureTime
                    },
                    packet => {
                        socket.send(JSON.stringify(packet));
                    }
                );
                break;

            default:
                console.error(`Unknown packet type: ${packet.type}`);
        }
    });

    socket.send(
        JSON.stringify({
            type: "Hello"
        })
    );
});

WebServer.listen(PORT, () => {
    console.log(`http/ws server listening on ${PORT}`);
});

if (process.pkg) {
    console.log(`
    
    >>> OPEN THIS URL TO START THE GAME: http://localhost:${PORT}/ <<<
    
    `);
}
