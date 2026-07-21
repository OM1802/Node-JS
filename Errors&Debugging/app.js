console.log("Program started");

const http = require("http");
const logicalError = require("./logicalError");

console.log("Modules loaded");

const server = http.createServer((req, res) => {
    console.log("Request received");
    logicalError();
    res.end("Hello");
});

console.log("Before listen");

server.listen(3011, () => {
    console.log("SERVER RUNNING");
});

console.log("After listen");