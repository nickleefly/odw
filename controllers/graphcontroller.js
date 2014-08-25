var GraphModel = require('../models/graphModel.js');
var fs = require('fs');

/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  var graphModel = new GraphModel();
  graphModel.GetData(function(err, data) {
    graphModel.listing = data;
    res.render('graph.ejs', graphModel)
  });
}