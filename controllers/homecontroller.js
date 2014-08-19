/**
Provides the controllers for the application views

@module api/controllers
**/
exports.controller = function(req, res) {
  res.render('index', { title: 'Express' });
}