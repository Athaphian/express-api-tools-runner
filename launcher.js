'use strict';

const apiBaseUrl = '/api';
const appDirectory = 'app/';

const express = require('express'),
    app = express(),
    log = require('express-api-tools').logging,
    appHealth = require('express-api-tools').health,
    uptime = require('express-api-tools').uptime,
    env = require('express-api-tools').env('NODE_ENV', 'prod'),
    fs = require('fs'),
    path = require('path');

log.enableLoggingBasedOnParam('log');

// Serve the health check of the app
appHealth.api(app, '/health');

// Serve the uptime api
uptime.api(app, apiBaseUrl + '/uptime');

// Serve the environment api
env.api(app, apiBaseUrl + '/env');

// Serve all the user apis
fs.readdirSync('modules').forEach(function(file) {
    log.info('Mounting api endpoint ' + file);
    require(path.resolve( "." ) + '/modules/' + file).api(app, apiBaseUrl);
});

// Serve the frontend app
app.use('/', express.static(appDirectory, {index: ['index.html', 'index.htm']}));

// Listen on port
app.listen(process.env.PORT || 8088);
