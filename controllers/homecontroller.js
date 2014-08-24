var HomeModel = require('../models/homeModel.js')
/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  var homeModel = new HomeModel();
  homeModel.topAvgRating(function(err, data){
    homeModel.listing = data;
    res.render('index.ejs', homeModel);
  });
}