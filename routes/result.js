var express = require('express'),
	controller = require('../controllers/result'),
	router = express.Router();

router.route('/:id')
  .get(controller.getResult);

module.exports = router;