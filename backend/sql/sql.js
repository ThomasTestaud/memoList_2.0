const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'memolist_2.0',
});

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
