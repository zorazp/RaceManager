var express = require('express');

//Controller
var categoryCtrl = require('../controllers/category');

var categoryRouter = express.Router();

categoryRouter.route('/data/:id')
  .get(categoryCtrl.getData);

module.exports = categoryRouter;