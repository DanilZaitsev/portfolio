require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const react_app = express();
const logger = require('./logger');
const graphite = require('./graphite_reporter');
const cards = require('./card_data');

const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
const REACT_APP_TUNNEL_PORT = process.env.REACT_APP_TUNNEL_PORT;
const GRAPHITE_HOST = process.env.GRAPHITE_HOST;
const GRAPHITE_PORT = process.env.GRAPHITE_PORT;

graphite.initStatsD(GRAPHITE_HOST, GRAPHITE_PORT);
const metrics = graphite.metrics;

function start() {
    process.on('uncaughtException', function (err) {
        logger.error('uncaught error', err);
    });

    app.use(addCommonHeaders);

    app.get('/cards', function (request, response) {
        logger.info(request.query);
        // response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(JSON.stringify(cards.data[request.query.user]));
        response.end();
    });

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

    app.listen(REACT_APP_SERVER_PORT, function () {
        logger.info("Server has started: " + REACT_APP_SERVER_PORT);
    });

    react_app.use(addCommonHeaders);
    react_app.use(('*', express.static(path.join(__dirname, '../build'))));
    react_app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
    react_app.listen(REACT_APP_TUNNEL_PORT, function () {
        logger.info("Server has started: " + REACT_APP_TUNNEL_PORT);
    });


    function addCommonHeaders(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next(); // forwards request
    }
}

exports.start = start;