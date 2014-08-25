//Imports
var mysql = require('../configs/env.js');

/**
* Service that handles database connections for MLSs
*
* @class HomeService
* @constructor
*/
var HomeService = function() {
  var namespace = {
    /**
    * Returns top avg rating
    *
    *@method GetTopTenAvgRating
    *@param callback Callback function to be called when finished
    *@return Error to the callback function
    */
    GetTopAvgRatingService: function(callback) {
      var query = "select * from (select count(rating) as rcount, sum(rating) as rsum, avg(rating) as ravg, movie_id, m.movie_title as movie_title from ratings inner join movies m on m.id = ratings.movie_id group by movie_id) as a order by rcount;";

      mysql.ExecuteQuery(query, function(err, e) {
        callback(err, e);
      });
    }
  };
  return namespace;
}();

module.exports = HomeService;