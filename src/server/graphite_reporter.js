const lynx = require('lynx');
const metricsParams = {
    prefix: 'PORTFOLIO',
    on_error: function (err) {
        console.error(err);
    }
};

function empty() { }
const emptyMetrics = { set: empty, increment: empty, hitToStats: empty, send: empty };

exports.initStatsD = initStatsD;
exports.metrics = emptyMetrics;

function initStatsD(host, port, prefix) {
    if (prefix)
        metricsParams.prefix = prefix;
    const metrics = new lynx(host, port, metricsParams);
    exports.metrics = metrics;
    let statsValues = {};
    setInterval(function () {
        const sendValues = {};
        let send;
        for (var key in statsValues){
            send = true;
            updateMetricsObj(key, statsValues[key], sendValues);
        }
        if(send === true)
            metrics.send(sendValues);
        statsValues = {};
    }, 1000);

    function hitToStats(dirs) {
        for (let key in dirs){
            if(Number.isInteger(dirs[key])) {
                if (!statsValues[key])
                    statsValues[key] = 0;
                statsValues[key] += dirs[key];
            } else
                statsValues[key] = dirs[key];
        }
    }
    exports.metrics.hitToStats = hitToStats;
}

function updateMetricsObj(key, value, obj) {
    if(Number.isInteger(value))
        obj[key] = value + '|c';
    else
        obj[key] = value;
}