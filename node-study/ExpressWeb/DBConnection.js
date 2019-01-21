var mysql = require('mysql');

var dbconfig = {
  host:'localhost',
  user:'node',
  password:'3333',
  port:3306,
  database:'node'
}

var pool = mysql.createPool(dbconfig);

module.exports = pool;