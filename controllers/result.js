//File: controllers/result.js
var mongoose = require('mongoose');
var Result = mongoose.model('Result');

exports.getResultById = function(req, res) {
  Result.findById(req.params.id)
    .populate('category season track constructors.drivers')
    .exec(function(err, result) {
      if (err)
        return res.status(500).send(err.message);
      res.status(200).jsonp(result);
    });
};

exports.getLastResult = function(req, res) {
  Result.findOne()
    .populate('category season track constructors.drivers')
    .sort({ field: 'asc', _id: -1 })
    .limit(1)
    .exec(function(err, result) {
      if (err)
        return res.status(500).send(err.message);
      res.status(200).jsonp(result);
    });
}