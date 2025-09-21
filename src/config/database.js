const mysql = require('mysql2');

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@Myu311099',
  database: 'express_mysql'
});

module.exports = dbPool.promise();