var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tiger',
  password : 'tiger',
  database : 'test'
});

connection.connect();

connection.query('SELECT * FROM users', function(err, rows, fields) {
  if (err) throw err;

  console.log('My name is: ', rows[0].name);
});

connection.end();
