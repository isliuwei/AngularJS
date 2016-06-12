
/*	定义一个BookStoreCtrl的模块	*/
/**
 *angular.module()第一个参数是你的模块的别名，第二个参数数组是你当前模块所依赖的其他模块
 *当前模块依赖 服务模块 BookStoreService
 *这样我们就可以在此模块中使用所以来模块中的服务与方法line38
 */

var BookStoreCtrl = angular.module('BookStoreCtrl',['BookStoreService']);

BookStoreCtrl
.controller('bookTypeCtrl',['$scope',function($scope){
	//$scope.bookCates = ['全部','计算机','金融','哲学','商务办公']

	$scope.bookTypes = [
		{
			'name':'全部',
			'type': 'all'
		},
		{
			'name':'计算机',
			'type': 'comp'
		},
		{
			'name':'金融',
			'type': 'fina'
		},
		{
			'name':'哲学',
			'type': 'phil'
		},
		{
			'name':'商务办公',
			'type': 'off'
		}
	];
}])
/*当前控制器依赖 angularjs自带的服务$http 以及 我们自定义的服务BookStoreService下的BookService服务*/
.controller('booksCtrl',['$scope','$http','$stateParams','BookService',function($scope,$http,$stateParams,bookService){
	//console.log($stateParams);

	if(!$stateParams.bookType){
		console.log('error');
	}else{
		/*我们调用BookStoreService下的BookService服务*/
		bookService.getData($stateParams.bookType,function(data){
			$scope.books = data;
		});
	}
	// $http({
	// 	method: 'GET',
	// 	url: 'data/books'+$stateParams.bookType+'.json',
	// }).success(function(data){
	// 	$scope.books = data;
	// });
}]);
