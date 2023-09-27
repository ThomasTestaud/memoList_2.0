var express = require('express');
var router = express.Router();
const SQLquery = require('../sql/sql.js');


router.get('/', function(req, res, next) {
  const query = `SELECT * FROM lists`;

  SQLquery(query, (error, response) => {
    res.json(response);
  });
});

router.post('/', function(req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  
  const query = "INSERT INTO `lists`(`name`, `description`) VALUES (?, ?)";

  const values = [title, description];

  SQLquery(query, values, (error, response) => {
    res.json("success");
  });
});

router.patch('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const title = req.body.title;
  const description = req.body.description;
  
  const query = "UPDATE `lists` SET `name`=?,`description`=? WHERE id = ?;";

  const values = [title, description, id];

  SQLquery(query, values, (error, response) => {
    res.json("success");
  });
});

router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  
  const query = "DELETE FROM `lists` WHERE id = ?;";

  const values = [id];

  SQLquery(query, values, (error, response) => {
    res.json("success");
  });
});

module.exports = router;
