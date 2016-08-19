
var myApp = angular.module('myApp',[]);

myApp.factory('data',function(){
	return [
		{
		 'id' : 3123,
		 'name': 'ipad mini',
		 'price': 2400
		},
		{
		 'id' : 3323,
		 'name': 'ipad',
		 'price': 3420
		},
		{
		 'id' : 3563,
		 'name': 'iphone',
		 'price': 5400
		},
		{
		 'id' : 3983,
		 'name': 'imac',
		 'price': 15400
		}
	];
});
myApp.controller('myCtrl',['$scope','data',function($scope,data){
	$scope.products = data;
	
}]);