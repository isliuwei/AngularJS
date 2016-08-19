
var myFactory = angular.module('myFactory',[]);

myFactory.factory('myProvider',['$http',function($http){
	return{
		getData: function(callback){

			$http({
					method: 'GET',
					url: 'js/product.json'
				}).success(function(data){
					callback && callback(data);
			});

		}
	};
}]);