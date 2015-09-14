var express = require('express');
var router = express.Router();
var mrender = require("./renderer.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with photos.')
  mrender.render("photos", req, res);

});

module.exports = router;