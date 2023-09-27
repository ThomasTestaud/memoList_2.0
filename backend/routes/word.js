var express = require('express');
var router = express.Router();
const SQLquery = require('../sql/sql.js');


router.get('/', function(req, res, next) {
  const query = `SELECT * FROM words`;

  SQLquery(query, (error, response) => {
    res.json(response);
  });
});

router.post('/', function(req, res, next) {
  const stringOne = req.body.stringOne;
  const stringTwo = req.body.stringTwo;
  
  const query = "INSERT INTO `words`(`list_id`, `string_one`, `string_two`) VALUES ('"+1+"','"+stringOne+"','"+stringTwo+"')";

  SQLquery(query, (error, response) => {
    res.json("success");
  });
});

router.patch('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const stringOne = req.body.stringOne;
  const stringTwo = req.body.stringTwo;
  
  const query = "UPDATE `words` SET `string_one`='"+stringOne+"',`string_two`='"+stringTwo+"' WHERE id = "+id+";";

  SQLquery(query, (error, response) => {
    res.json("success");
  });
});

router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  
  const query = "DELETE FROM `words` WHERE id = "+id+";";

  SQLquery(query, (error, response) => {
    res.json("success");
  });
});

module.exports = router;
