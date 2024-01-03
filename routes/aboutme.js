const router = require('express').Router();

router.get('/', (req, res) => {
    // Render the about.html file
    res.sendFile('./src/about.html');
  });

module.exports = router;