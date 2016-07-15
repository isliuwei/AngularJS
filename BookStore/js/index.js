

/*	定义一个bookStoreApp的模块	*/
/**
 *angular.module()第一个参数是你的模块的别名，第二个参数数组是你当前模块所依赖的其他模块
 *当前模块依赖 ui.router 以及控制器模块BookStoreCtrl
 *这样我们就可以在此模块中使用所依赖模块中的服务与方法line32 line36
 */

var bookStoreApp = angular.module('bookStoreApp',['ui.router','BookStoreCtrl']);

/*	配置路由	*/
bookStoreApp.config(function($stateProvider,$urlRouterProvider){
	/*默认路由*/
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	/*.state后面的值就是状态名 其必须和ui-sref的名一致*/
		.state('login',{
			url: '/login',
			templateUrl: 'tpls/login.html'
		})
		.state('bookList',{
			url: '/bookList/{bookType:[0-9]}',
			// templateUrl: 'tpls/bookList.html'
			views:{
				'':{
					templateUrl: 'tpls/bookList.html'
				},
				/*嵌套view的名字@当前state名字	bookType@bookList*/
				'bookType@bookList':{
					templateUrl: 'tpls/bookType.html',
					controller: 'bookTypeCtrl'
				},
				'bookGrid@bookList':{
					templateUrl: 'tpls/bookGrid.html',
					controller: 'booksCtrl'
				}
			}
		})









});
