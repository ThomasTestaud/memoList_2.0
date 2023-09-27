var express = require('express');
var router = express.Router();
const SQLquery = require('../sql/sql.js');


router.get('/:listId', function(req, res, next) {
  const listId = Number(req.params.listId);
  const query = `SELECT * FROM words WHERE list_id = ?`;

  const values = [listId];

  SQLquery(query, values, (error, response) => {
    res.json(response);
  });
});

router.post('/:listId', function(req, res, next) {
  const listId = Number(req.params.listId);
  const stringOne = req.body.stringOne;
  const stringTwo = req.body.stringTwo;
  
  const query = "INSERT INTO `words`(`list_id`, `string_one`, `string_two`) VALUES (?, ?, ?)";

  const values = [listId, stringOne, stringTwo];

  SQLquery(query, values, (error, response) => {
    res.json("success");
  });
});

router.patch('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const stringOne = req.body.stringOne;
  const stringTwo = req.body.stringTwo;
  
  const query = "UPDATE `words` SET `string_one`=?,`string_two`=? WHERE id = ?;";

  const values = [stringOne, stringTwo, id];

  SQLquery(query, values, (error, response) => {
    res.json("success");
  });
});

router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  
  const query = "DELETE FROM `words` WHERE id = ?;";

  const values = [id];

  SQLquery(query, values, (error, response) => {
    res.json("success");
  });
});

module.exports = router;
