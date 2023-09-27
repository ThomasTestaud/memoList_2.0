var express = require('express');
var router = express.Router();
const SQLquery = require('../sql/sql.js');


router.get('/', function(req, res, next) {
  const query = `SELECT * FROM words`;

  SQLquery(query, (error, response) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    if (!response || response.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.json(response);
  });
});

module.exports = router;
