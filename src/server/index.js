const express = require('express');
const app = express();
const logger = require('../logger');
const graphite = require('./graphite_reporter');
graphite.initStatsD('172.17.0.3', 8125);
const metrics = graphite.metrics;

function start(port) {
    process.on('uncaughtException', function (err) {
        logger.error('uncaught error', err);
    });

    app.use(addCommonHeaders);

    app.all('/*', function (request, response) {
        const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null;
        logger.info("event", request.query, ip, request.headers["user-agent"]);
        const metric = request.query.event.split(' ')[0] + '.' + request.query.title.split(' ')[0];
        metrics.increment('events.total');
        metrics.increment('events.' + metric);
        // response.writeHead(200, { "Content-Type": "text/plain" });
        response.write('OK');
        response.end();
    });

    app.listen(port, function () {
        logger.info("Server has started: " + port);
    });

    function addCommonHeaders(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next(); // forwards request
    }
}

exports.start = start;