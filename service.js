const express = require('express');
const bunyan = require('express-bunyan-logger');

const router = require('./routes');
const service = express();

service.use(bunyan({
  level: 'INFO',
  excludes: [
    'remote-address',
    'ip',
    'user-agent',
    'http-version',
    'response-hrtime',
    'req',
    'res',
  ]
}));
service.use(router);

module.exports = service;
