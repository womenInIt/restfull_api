var express = require('express');
var router = express.Router();

/* GET all ideas. */
router.get('/', function(req, res, next) {
  res.send("ok");
});

module.exports = router;
