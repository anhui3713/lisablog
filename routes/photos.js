var express = require('express');
var fs = require('fs');
var router = express.Router();
var mrender = require("./renderer.js");

/**
 * 获取照片列表
 */
router.get('/', function(req, res, next) {
  //res.send('respond with photos.')
  mrender.render("photos", req, res);

});

/**
 * 获取一张照片
 */
router.get("/photo/:datefolder/:photoname", function (req, res) {
  var path = process.cwd().replace(/bin$/, "") + "/photofiles/" + req.params.datefolder + "/" + req.params.photoname;

  fs.readFile(path, "binary", function (error, file) {
    if(error) {
      console.log(error);
      return ;
    }

    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(file, "binary");
    res.end();
  });

});

module.exports = router;