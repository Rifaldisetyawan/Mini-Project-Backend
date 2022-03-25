const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Rifaldisetyawan',
  database : 'mini_project_backend',
  port     : '3306'
});

module.exports = connection;