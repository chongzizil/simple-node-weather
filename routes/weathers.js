var express = require('express');
var router = express.Router();
var YQL = require('yql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var city = req.query.city;
  var query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")');

  query.exec(function(err, data) {
    console.log(data);
    if (data.query.results !== null) {
      res.json(data.query.results.channel);
    } else {
      res.status(400).send('Bad Request');
    }
  });
});

module.exports = router;
