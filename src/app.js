require('dotenv').config();
const express = require('express');
const { setupRoutes } = require('./controllers');
const app = express();

const port = process.env.PORT || 3002;

app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = app;