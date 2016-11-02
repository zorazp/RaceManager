//File: controllers/track.js
var mongoose = require('mongoose');
var Track = mongoose.model('Track');

//GET - Return all Tracks
exports.getTracks = function(req, res) {
  Track.find(function(err, tracks) {
    if (err)
      return res.status(500).send(err.message);
    res.status(200).jsonp(tracks);
  });
};
//POST - Insert a Track
exports.setTrack = function(req, res) {
  var track = new Track({
    name: req.body.name,
    country: req.body.country,
    sectors: req.body.sectors
  });
  track.save(function(err, track) {
    if (err)
      return res.status(500).send(err.message);
    res.status(200).jsonp(track);
  });
};
//POST - Insert a Track List
exports.setTracks = function(req, res) {
  if (req.body instanceof Array)
    Track.insertMany(req.body, function (err, tracks) {
      if (err)
        return res.status(500).send(err.message);
      res.status(200).jsonp(tracks);
    });
  else
    exports.setTrack(req, res);
};