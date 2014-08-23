var GraphModel = require('../models/graphModel.js');
var fs = require('fs');
var moment = require('moment');

/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  var graphModel = new GraphModel();
  graphModel.GetData(function(err, model){
    model.title = graphModel.title;
    model.listing = graphModel.listing;

    fs.exists('public/stream-data.csv', function(exists) {
      if (exists) {
        // return res.send(model)
        res.render('graph.ejs')
      } else {
        var wstream = fs.createWriteStream('public/stream-data.csv');
        wstream.write('id,year,Film,Rating,Genre,zipcode\n');
        for (var i = 0; i < graphModel.listing.length; i ++) {
          var item = graphModel.listing[i];
          var listingData = item.id + ',' +
            moment(item.release_date).format('YYYY') + ',' +
            item.movie_title + ',' +
            item.rating + ',' +
            item.genre + ',' +
            item.postalCode + '\n';

            wstream.write(listingData);
        }
        wstream.end();
      }
    })
  });
}