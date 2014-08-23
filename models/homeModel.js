var homeService = require('../services/homeservice.js')
/**
Provides the models for the application

@module api/models
**/

module.exports = homeModel;
function homeModel(){
  this.title = 'ODW';
  this.listing = [];
}

//Get top ten rating
homeModel.prototype.topAvgRating = function(callback) {
  var self = this;
  homeService.GetTopAvgRatingService(function(err, data) {
    self.listing = data;
    callback(err, data);
  });
}
