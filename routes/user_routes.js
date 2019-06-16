var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');
var unit_controller = require('../controllers/unitController');

router.get('/largest/invoice', [user_controller.largestInvoice]);
router.get('/largest/units', [unit_controller.largestUnits]);

module.exports = router;
