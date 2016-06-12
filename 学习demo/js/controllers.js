var AppCtrls = angular.module('AppCtrls',[]);

AppCtrls.controller('CateCtrl',['$scope',function($scope){
	//$scope.bookCates = ['全部','计算机','金融','哲学','商务办公']

	$scope.bookCates = [
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
	]
}]);


AppCtrls.controller('BookCtrl',['$scope','$http',function($scope,$http){
	$http(
			{
				method: 'GET',
				url: './books.json'
			}
		).success(function(data){
				$scope.books = data;
		});
}]);
