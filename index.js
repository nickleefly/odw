var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'nick1415926',
  database : 'odw'
});

connection.connect();

connection.query('SELECT * from genres', function(err, result) {
  if (err) throw err;

  console.log(result);
});

connection.end();