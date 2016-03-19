'use strict';
import express from 'express';

let app = express.Router();

// add api routes here
app.get('/api/test', (req, res) => {
  res.send('Testing 1234');
});

module.exports = app;
