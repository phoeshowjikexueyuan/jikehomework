/*
开启后台主页
 */

var express = require('express');
var router = express.Router();


router.get('/',function(req, res, next) {
  res.render('newsdashboard');
});

module.exports = router;