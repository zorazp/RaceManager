var express = require('express'),
    controller = require('../controllers/track'),
    router = express.Router();

router.route('/')
  .get(controller.getTracks)
  .post(controller.setTracks);

module.exports = router;