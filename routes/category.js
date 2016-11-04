var express = require('express'),
	controller = require('../controllers/category'),
	router = express.Router();

router.route('/data/:id')
  .get(controller.getData);

module.exports = router;