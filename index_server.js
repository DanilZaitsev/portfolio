const server = require("./src/server");
const config = require("./src/config");

server.start(config.port);