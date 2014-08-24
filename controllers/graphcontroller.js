var GraphModel = require('../models/graphModel.js');
var fs = require('fs');

/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  var graphModel = new GraphModel();
  graphModel.GetData(function(err, model){
    model.title = graphModel.title;
    model.listing = graphModel.listing;
    console.log(model.listing)

    res.render('graph.ejs', model)
  });
}