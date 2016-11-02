var express = require('express');

//Controller
var trackCtrl = require('../controllers/track');

var trackRouter = express.Router();

trackRouter.route('/')
  .get(trackCtrl.getTracks)
  .post(trackCtrl.setTracks);

module.exports = trackRouter;