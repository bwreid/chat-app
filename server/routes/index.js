var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chatroom', function(req, res, next) {
  res.render('chatroom');
});

module.exports = router;
