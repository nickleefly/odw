var userService = require('../services/userservice.js')
/**
Provides the models for the application

@module api/models
**/

module.exports = userModel;
function userModel(){
  this.title = 'ODW';
  this.listing = [];
}

//Get top ten rating
userModel.prototype.GetAvgRatingForGenre = function(callback) {
  var self = this;
  userService.GetAvgRatingForGenre(function(err, data) {
    self.listing = data;
    callback(err, data);
  });
}