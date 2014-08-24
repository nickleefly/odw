var graphService = require('../services/graphservice.js')
/**
Provides the models for the application

@module api/models
**/

module.exports = graphModel;
function graphModel(){
  this.title = 'ODW';
  this.listing = [];
}

//Get top ten rating
graphModel.prototype.GetData = function(callback) {
  var self = this;
  graphService.GetDataService(function(err, data) {
    self.listing = data;
    callback(err, data);
  });
}