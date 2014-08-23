var express = require('express');
var router = express.Router();
var graph = require('../controllers/graphcontroller.js')

/* GET users listing. */
router.get('/', graph.controller);

module.exports = router;
