var express = require('express');
var router = express.Router();
const SQLquery = require('../sql/sql.js');

let list = [
  {
    id: 1,
    list_id: 1,
    string_one: "Bonjour",
    string_two: "Hello"
  },
  {
    id: 2,
    list_id: 1,
    string_one: "Aurevoir",
    string_two: "Goodbye"
  },
  {
    id: 3,
    list_id: 1,
    string_one: "Huit",
    string_two: "Height"
  },
  {
    id: 4,
    list_id: 1,
    string_one: "Voiture",
    string_two: "Car"
  },
]

router.get('/', function(req, res, next) {
  const query = `SELECT * FROM words`;

  SQLquery(query, (response) => {
      res.json(response);
  });
});

router.post('/', function(req, res, next) {
  res.json(list);
});

module.exports = router;
