var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET all ideas. */
router.get('/', function(req, res, next) {
  try {
    let rawdata = fs.readFileSync(path.resolve('./resourses/textdata.json'),  "utf-8");   
    let ideas = JSON.parse(rawdata);
    res.send(ideas);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
