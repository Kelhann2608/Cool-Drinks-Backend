require('dotenv').config();
const express = require('express');
const setupRoutes = require('./controllers');
const app = express();

app.use(express.json());

app.get('/coucou', (req, res) => {
  res.status(200).send('hibou');
});

setupRoutes(app);

module.exports = app;
