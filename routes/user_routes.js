var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');

router.get('/largest/invoice', [user_controller.largestInvoice]);
router.get('/largest/units', [user_controller.largestUnits]);

module.exports = router;
