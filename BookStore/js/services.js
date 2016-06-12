/*	定义一个BookStoreService的模块	*/
/**
 *angular.module()第一个参数是你的模块的别名，第二个参数数组是你当前模块所依赖的其他模块
 *当前模块定义一个BookService服务
 *这样我们就可以在依赖此模块中使用BookService服务
 */

var BookStoreService = angular.module('BookStoreService',[]);


BookStoreService.factory('BookService',['$http',function($http){
	return{
		getData: function(bookType,callback){

			$http({
					method: 'GET',
					url: 'data/books'+bookType+'.json'
				}).success(function(data){
					callback && callback(data);
			});

		}
	};

}]);