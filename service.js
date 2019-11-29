const express = require('express');

const service = express();

service.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = service;
