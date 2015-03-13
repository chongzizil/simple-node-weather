var express = require('express');
var router = express.Router();
var YQL = require('yql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var city = req.query.city;
  var query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")');

  query.exec(function(err, data) {
    var location = data.query.results.channel.location;
    var condition = data.query.results.channel.item.condition;

    res.json(data.query.results.channel);
  });
});

module.exports = router;
