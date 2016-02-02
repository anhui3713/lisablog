var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('lisablog', server, {safe: true});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 注册逻辑
 */
router.post('/register', function (req, res) {

  // 打开数据库连接
  db.open(function (err, db) {
    if(err) {
      console.log('连接数据库出错');
      return ;
    }

    // 连接userinfo集合
    db.collection("userinfo", function (err, collection) {
      if(err) {
        console.log('连接集合出错');
        return;
      }

      // 添加数据
      collection.insert(req.body, {safe: true}, function (err, result) {
        if(err) {
          console.log('添加数据出错.');
          return ;
        }

        console.log('添加成功');
      });
    });
  });
});

module.exports = router;
