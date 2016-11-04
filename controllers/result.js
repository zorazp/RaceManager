//File: controllers/category.js
var mongoose = require('mongoose');
var Result = mongoose.model('Result');

//GET - Return all Data
exports.getResult = function(req, res) {
  Result.findById(req.params.id)
    .populate('category season track constructors.drivers')
    .exec(function(err, result) {
      if (err)
        return res.status(500).send(err.message);
      res.status(200).jsonp(result);
    });
};