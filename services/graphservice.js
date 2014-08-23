//Imports
var mysql = require('../configs/env.js');

/**
* Service that handles database connections for MLSs
*
* @class HomeService
* @constructor
*/
var GraphService = function() {
  var namespace = {
    /**
    * Returns top avg rating
    *
    *@method GetTopTenAvgRating
    *@param callback Callback function to be called when finished
    *@return Error to the callback function
    */
    GetDataService: function(callback) {
      var query = "select m.id, m.release_date, m.movie_title, r.rating, g.genre, u.postalCode from movies m inner join genres_movies gm on gm.movies_id = m.id inner join genres g on gm.genres_id = g.id inner join ratings r on r.movie_id = m.id inner join users u on u.id = r.id";

      mysql.ExecuteQuery(query, function(err, e){
        callback(err, e);
      });
    }
  };
  return namespace;
}();

module.exports = GraphService;