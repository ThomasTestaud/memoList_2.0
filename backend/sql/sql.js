const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  'host': 'localhost',
  'user': process.env.DB_USER,
  'port': process.env.DB_PORT,
  'password': process.env.PASSWORD,
  'database': process.env.DB_NAME
});
console.log('test');
console.log(process.env.DB_PORT);

// Function to execute SQL queries
function sqlQuery(query, values, callback) {
  // Get a connection from the pool
  pool.getConnection((connError, connection) => {
    if (connError) {
      console.error('Connection error:', connError);
      return callback(connError, null);
    }

    // Execute the query with optional values
    connection.query(query, values, (queryError, result) => {
      // Release the connection back to the pool
      connection.release();

      if (queryError) {
        console.error('Query error:', queryError);
        return callback(queryError, null);
      }

      callback(null, result);
    });
  });
}

module.exports = sqlQuery;
