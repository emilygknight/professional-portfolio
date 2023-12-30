// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname, '.client/src/css')));
// Sets up the routes
app.use(require('./client/src/js/index.js'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});