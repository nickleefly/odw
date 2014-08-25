var mysql = require('mysql');

/**
* Provides encapsulated functionality for connecting with a MySQL database
*
* @class ConnectionManager
* @constructor
*/
var ConnectionManager = function() {
  var namespace = {
    /**
    * Generates and opens a new connection
    *
    *@method GetConnection
    *@return Open connection
    */
    GetConnection : function() {
      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'yourpassword',
        database : 'odw'
      });
      connection.connect(function(err) {
        if (err) {
          throw err;
        }
      });
      return connection;
    },
    /**
    * Ends an existing connection
    *
    *@method EndConnection
    */
    EndConnection : function(connection) {
      connection.end();
    },
    /**
    * Executes a single query
    *
    *@method ExecuteQuery
    *@param query Query to be executed
    *@param parameters Parameters to be passed to the query. In the query, the placeholder for them is ?
    *@param callback Callback function to be called when finished
    *@return Error (if any) and query results (to the callback function)
    */
    ExecuteQuery: function(query, callback, parameters) {
      var connection = this.GetConnection();
      try {
        connection.query(query, parameters, function(err, rows) {
          ConnectionManager.EndConnection(connection);
          callback(err, rows);
        });
      } catch(err) {
        ConnectionManager.EndConnection(connection);
        callback(err);
      }
    }
  };
  return namespace;
}();

//Exports the manager
module.exports = ConnectionManager;
