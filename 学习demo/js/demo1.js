var myApp = angular.module('myApp',[]);



myApp.controller('myCtrl',['$scope',function($scope){
	$scope.loadDate = function(){
		console.log('myCtrl    数据加载中。。。');
	};

}]);


myApp.directive('loader',function(){
	return {
		restrict: 'E',
		template: "<h2>滑动加载</h2>",
		replace: true,
		/* linkDOM 操作 */
		link: function(scope,element){
			element.bind('mouseenter',function(){
				console.log('link    数据加载中。。。');
				scope.loadDate();
			});
		}
	}
});



