var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();

var baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
var apiKey = "9bd3d07aab4e665efd43c50664dc9c7c";

/* GET users listing. */
router.get('/', function (req, res, next) {
  fetch(`${baseWeatherUrl}?q=${req.params.town}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return res.send(data);
    }).catch(err => {
      console.log(err);
      return res.send(err);
    });
});

module.exports = router;
