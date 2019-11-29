var express = require('express');
var service = express();

service.get('/', function (req, res) {
  res.send('hello world');
});

module.exports = service;
