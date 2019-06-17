var express = require('express');
var router = express.Router();

var unit_controller = require('../controllers/unitController');

router.get('/largest/units', [unit_controller.largestUnits]);

module.exports = router;
