/* 
 *  配置requirejs的路由表
 */
require.config({
	// 模块加载的其实路径
	"baseUrl": "/",
	// 模块及url映射
	paths: {
		"jquery": "jquery/dist/jquery.min",
		"bootstrap": "bootstrap/dist/js/bootstrap.min"
	},
	// 非AMD模块之间的相互依赖
	shim: {
		// bootstrap依赖于jquery
		"bootstrap": {
			"deps": ["jquery"]
		}
	}
});
