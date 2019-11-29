const express = require('express');
const router = require('./routes');

const service = express();

service.use(router);

module.exports = service;
