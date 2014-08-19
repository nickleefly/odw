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
        * Returns top ten avg rating
        *
        *@method GetTopTenAvgRating
        *@param callback Callback function to be called when finished
        *@return Error to the callback function
        */
        GetTopTenAvgRating: function(callback) {
            var query = "select * from (select count(rating) as rcount, avg(rating) as ravg, movie_id from ratings group by movie_id) as a order by rcount desc limit 10;";

            mysql.ExecuteQuery(query, function(err, e){
                callback(err, e);
            });
        }
    };
    return namespace;
}();

module.exports = HomeService;