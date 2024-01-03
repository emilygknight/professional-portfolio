// Dependencies
const express = require('express');
const path = require('path');
const routes = require('./routes');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src')));

app.use(routes);

app.listen(PORT, () => {
  console.log('Server listening on: http://127.0.0.1:' + PORT);
});

