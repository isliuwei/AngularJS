
/*	定义一个myApp的模块	*/
var myApp = angular.module('myApp',['ui.router','AppCtrls']);

/*	配置路由	*/
myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url: '/index',
			views:{
				'':{
					templateUrl: 'index.html'
				},
				'nav@index':{
					templateUrl: 'tpls/nav.html'
				},
				'main@index':{
					templateUrl: 'tpls/main.html'
				}
			}
		})

		.state('login',{
			url: '/login',
			templateUrl: 'tpls/login.html'
		})
		.state('book',{
			url: '/book',
			views:{
				'':{
					templateUrl: 'tpls/book.html'
				},
				'booktype@book':{
					templateUrl: 'tpls/booktype.html'
				},
				'bookgrid@book':{
					templateUrl: 'tpls/bookgrid.html'
				}
			}

		})
		.state('book.all',{
			url: '/all',
			templateUrl: 'tpls/all.html'	
		})
		.state('book.comp',{
			url: '/comp',
			templateUrl: 'tpls/comp.html'	
		})
		.state('book.fina',{
			url: '/fina',
			templateUrl: 'tpls/fina.html'	
		})
		.state('book.phil',{
			url: '/phil',
			templateUrl: 'tpls/phil.html'	
		})
		.state('book.off',{
			url: '/off',
			templateUrl: 'tpls/off.html'	
		})

		.state('addbook',{
			url: '/addbook',
			templateUrl: 'tpls/addbook.html'
		})

		.state('navigator',{
			url: '/navigator',
			templateUrl: 'tpls/navi.html'	
		})

		.state('list',{
			url: '/list',
			templateUrl: 'tpls/list.html'	
		})

		.state('navigator.nav1',{
			url: '/nav1',
			templateUrl: 'tpls/nav1.html'	
		})

		.state('navigator.nav2',{
			url: '/nav2',
			templateUrl: 'tpls/nav2.html'	
		})

		.state('navigator.nav3',{
			url: '/nav3',
			templateUrl: 'tpls/nav3.html'	
		})


		

		
		

});









// routerApp.config(function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/index');
//     $stateProvider
//         .state('index', {
//             url: '/index',
//             views: {
//                 '': {
//                     templateUrl: 'tpls/home.html'
//                 },
//                 'main@index': {
//                     templateUrl: 'tpls/loginForm.html'
//                 }
//             }
//         })