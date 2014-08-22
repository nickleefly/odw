var HomeModel = require('../models/homeModel.js')
/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
    var homeModel = new HomeModel();
    homeModel.topTenAvgRating(function(err, model){
        model.title = homeModel.title;
        model.listing = homeModel.listing;
console.log(model)
        res.render('index.ejs', model);
    });
    // res.render('index', { title: 'Express' });
}