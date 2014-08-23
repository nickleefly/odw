var express = require('express');
var router = express.Router();
var user = require('../controllers/usercontroller.js')

/* GET users listing. */
router.get('/', user.controller);
router.get('/f', user.FemaleController);

module.exports = router;
