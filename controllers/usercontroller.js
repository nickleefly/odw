var UserModel = require('../models/userModel.js')
/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  var userModel = new UserModel();
  console.log(userModel)
  userModel.GetAvgRatingForGenre(function(err, model){
    model.title = userModel.title;
    model.listing = userModel.listing;
    res.render('user.ejs', model);
  });
}