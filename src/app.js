require('dotenv').config();
const express = require('express');
const cors = require('cors');
const setupRoutes = require('./controllers');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.get('/coucou', (req, res) => {
  res.status(200).send('hibou');
});

setupRoutes(app);

module.exports = app;
