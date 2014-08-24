var UserModel = require('../models/userModel.js')
/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  var userModel = new UserModel();
  userModel.GetAvgRatingForGenre('', function(err, data){
    userModel.listing = data;
    res.render('user.ejs', userModel);
  });
}

exports.FemaleController = function(req, res) {
  var userModel = new UserModel();
  userModel.GetAvgRatingForGenre('F', function(err, data){
    userModel.listing = data;
    res.render('userfemale.ejs', userModel);
  });
}