var express = require('express');
var fs = require('fs');
var router = express.Router();
var mrender = require("./renderer.js");

/**
 * 获取照片列表
 */
router.get('/', function(req, res, next) {
  //res.send('respond with photos.')
  mrender.render("photo", req, res);

});

/**
 * 获取一张略缩图照片
 */
router.get("/thumbnail/:datefolder/:photoname", function (req, res) {
  
  //  获取图片地址
  var base = process.cwd().replace(/bin$/, "");
  var projectBase = base  + "/photofiles/";
  var photoFolder = projectBase + req.params.datefolder + "/scaled/";
  var photoPath =  photoFolder + req.params.photoname;

  // 读取图片
  fs.readFile(photoPath, "binary", function (error, file) {
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