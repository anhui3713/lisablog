var express = require('express');
var router = express.Router();
var mrender = require("./renderer.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index');
  mrender.render("index", req, res);
});

module.exports = router;
