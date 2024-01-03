const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Handle the request and send the response
    res.send('./index.html');
  });

module.exports = router;