/**
 * Created by Light on 18-Apr-16.
 */

'use strict';

let curDir = './';
var logger_level = 'silly';
var logger_console = true;
var logger_console_level = 'silly';

var winston = require('winston');
winston.transports.DailyRotateFile = require('winston-daily-rotate-file');

var myCustomLevels = {
    levels: {
        silly: 5,
        debug: 4,
        info: 3,
        warn: 2,
        error: 1,
        critical: 0,
    },
    colors: {
        silly: 'blue',
        debug: 'white',
        info: 'green',
        warn: 'yellow',
        error: 'red',
        critical: 'magenta'
    }
};

var transports = [
    new winston.transports.DailyRotateFile({
        datePattern: ".dd-MM-yyyy",
        colorize: true,
        timestamp: function (date) {
            var date = new Date();
            return '[' + date.toISOString().replace('T', ' ') + ']';
        }, 
        level: logger_level,
        filename: curDir + '/logs/debug.log',
        json: false,
        maxsize: 20000000,
        maxFiles: 100,
        prettyPrint: true
    })
];

if (logger_console) {
    transports.push(new (winston.transports.Console)({
        timestamp: function (date) {
            var date = new Date();
            return '[' + date.toISOString().replace('T', ' ') + ']';
        }, 
        colorize: true,
        level: logger_console_level,
        prettyPrint: true
    }));
}



var logger = new winston.Logger({
    level: logger_level,
    transports: transports,
    levels: myCustomLevels.levels,
    colors: myCustomLevels.colors
});

/*exports*/
exports.trace = logger.silly;
exports.debug = logger.debug;
exports.info = logger.info;
exports.warn = logger.warn;
exports.error = logger.error;
exports.critical = logger.critical;
/*end exports*/