var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chad Clarke' });
});

/* GET portfolio page. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'My Works' });
});

module.exports = router;
