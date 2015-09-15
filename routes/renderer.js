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

    /**
     * 菜单数据
     */
    var data = {
        navlist: {
            "/": "主页",
            "/photo": "相册",
            // "/records": "点滴",
            "/skill": "技术",
            "/about": "关于"
        },
        // 获取当前请求地址的前缀,用于高亮导航条项目
        currentPath: /\/\w*/.exec(req.originalUrl)[0]
    };

    // 加载模板页面
    res.render("common/template", data, function (error, html) {
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