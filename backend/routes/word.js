var express = require('express');
var router = express.Router();

let list = [
  {
    id: 1,
    list_id: 1,
    string_one: "Bonjour",
    string_two: "Hello"
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("coucou");
});

module.exports = router;
