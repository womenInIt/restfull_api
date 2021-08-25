var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();

var baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
var apiKey = "9bd3d07aab4e665efd43c50664dc9c7c";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('response from other api');
});

module.exports = router;
