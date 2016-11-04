var express = require('express'),
    path = require('path');

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/templates/index.html'));
});

module.exports = router;