var express = require('express');
var router = express.Router();

var apiKey = "9bd3d07aab4e665efd43c50664dc9c7c";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('response from other api');
});

module.exports = router;
