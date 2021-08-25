var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET all ideas. */
router.get('/', function(req, res, next) {
  res.send("ok");
});

module.exports = router;
