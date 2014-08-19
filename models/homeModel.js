var homeService = require('../services/homeservice.js')
/**
Provides the models for the application

@module api/models
**/

module.exports = homeModel;
function homeModel(){
    this.title = 'ODW';
}

//Get top ten rating
homeModel.prototype.topTenAvgRating = function(callback) {
    homeService.GetTopTenAvgRating(function(err, e) {
        callback(err, e);
    })
}

//Get user info by userId
homeModel.prototype.GetUserInfo = function(userId, callback){

};
