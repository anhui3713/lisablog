var express = require('express');
var router = express.Router();
var renderer = {};

/**
 * 模板渲染
 * @param url
 * @param req
 * @param res
 */
renderer.render = function (url, req, res) {
    // 加载模板页面
    res.render("common/template", function (error, html) {
        if(html) {// 将具体业务读取并替换模板页中的具体对象
            res.render(url, function (error, content) {
                html = html.replace(/<content-page\/>/gi, content);

                res.send(html);
            });
        } else {
            res.send(error);
        }
    });
};

module.exports = renderer;