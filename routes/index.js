var express = require('express');
var router = express.Router();
var home = require('../controllers/homecontroller.js')

/* GET home page. */
router.get('/', home.controller);

module.exports = router;
