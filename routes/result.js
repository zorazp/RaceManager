var express = require('express'),
	controller = require('../controllers/result'),
	router = express.Router();

router.route('/')
  .get(controller.getLastResult);

router.route('/:id')
  .get(controller.getResultById);

module.exports = router;