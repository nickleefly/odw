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
homeModel.prototype.topTenAvgRating = function(callback) {
    var self = this;
    homeService.GetTopTenAvgRating(function(err, data) {
        self.listing = data;
        callback(err, data);
    })
}

//Get user info by userId
homeModel.prototype.GetUserInfo = function(userId, callback){

};
