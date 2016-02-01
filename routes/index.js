var express = require('express');
var router = express.Router();
var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/unirest', function(req, res, next) {
  unirest.get('https://reddit.com/.json')
  .end(function (response) {
    res.json({ resposne: response});
  });
});

module.exports = router;
