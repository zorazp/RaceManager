//File: controllers/category.js
var mongoose = require('mongoose');
var Constructor = mongoose.model('Constructor');

//GET - Return all Data
exports.getData = function(req, res) {
  Constructor.find({ category: req.params.id })
  	.populate("power_unit")
  	.populate("drivers")
    .exec(function(err, constructors) {
      if (err)
        return res.status(500).send(err.message);
      res.status(200).jsonp(constructors);
    });
};