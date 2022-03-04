const mysqlAccount = require('./private.json');
const mysql = require('mysql');
const sql = require('./sql.js');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: 3306,
  user: mysqlAccount.id,
  password: mysqlAccount.pw,
  database: 'todoapp_db'
});

const query = async (alias, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql[alias], values, (error, results) => {
      if(error) {
        console.log(error);
        reject({ error });
      }

      resolve(results);
    });
  });
};

module.exports = {
  query
};