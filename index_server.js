const server = require("./server");
const config = require("./src/config");

server.start(config.port);