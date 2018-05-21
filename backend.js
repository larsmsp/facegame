const WebSocket = require("ws");
const fs = require("fs");
const imageDataURI = require("image-data-uri");

const PORT = 4001;

const wss = new WebSocket.Server({
    port: PORT,
    perMessageDeflate: {
        zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        clientMaxWindowBits: 10, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        // should not be compressed.
    }
});

wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        const packet = JSON.parse(message);

        switch (packet.type) {
            case "RecognizeImage":
                console.log(`RecognizeImage - ${packet.imageBase64.length} bytes`);
                const image = imageDataURI.decode(packet.imageBase64);

                imageDataURI.outputFile(packet.imageBase64, "tmp-captures/faceimage-" + new Date().getTime() + ".jpg");
                break;

            default:
                console.error(`Unknown packet type: ${packet.type}`);
        }
    });

    ws.send("something");
});

console.log(`Server listening on port ${PORT}`);
