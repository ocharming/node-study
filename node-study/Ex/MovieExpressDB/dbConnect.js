var mysql = require('mysql');
var dbConfig = {
   host : 'localhost',
   user : 'node',
   password : '3333',
   port : 3306,
   multipleStatements : true,
   database : 'node'
};

var pool = mysql.createPool(dbConfig);
module.exports = pool;