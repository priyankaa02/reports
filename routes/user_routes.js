var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');

router.get('/largest/invoice', [user_controller.largestInvoice]);

module.exports = router;
