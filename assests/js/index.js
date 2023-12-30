const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./index.html')(app);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});