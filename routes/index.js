var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisClient = redis.createClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robot Factory' });
});

module.exports = router;
