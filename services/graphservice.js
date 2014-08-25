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
      var query = "select sum(r.Rating) as ratings_sum, u.postalCode as postalCode from ratings r inner join users u on u.id = r.id where u.postalCode REGEXP '^-?[0-9]+$' and u.postalCode > 0 group by u.postalCode order by u.postalCode limit 200;";

      mysql.ExecuteQuery(query, function(err, e) {
        callback(err, e);
      });
    }
  };
  return namespace;
}();

module.exports = GraphService;