//Imports
var mysql = require('../configs/env.js');

/**
* Service that handles database connections for MLSs
*
* @class HomeService
* @constructor
*/
var UserService = function() {
  var namespace = {
    /**
    * Returns top avg rating
    *
    *@method GetTopTenAvgRating
    *@param callback Callback function to be called when finished
    *@return Error to the callback function
    */
    GetAvgRatingForGenre: function(callback) {
      var query = "select count(r.rating) as rating_count, sum(r.rating) as rating_sum, avg(r.rating) as rating_avg, g.genre as genre_name from ratings r inner join genres_movies gm on gm.movies_id = r.movie_id inner join genres g on g.id = gm.genres_id inner join users u on u.id = r.id where u.gender = 'M' group by g.genre;";

      mysql.ExecuteQuery(query, function(err, e){
        callback(err, e);
      });
    }
  };
  return namespace;
}();

module.exports = UserService;