var myApp = angular.module('myApp',[]);



myApp.controller('myCtrl',['$scope',function($scope){
	$scope.sayHello = function(name){
		alert("Hello" + name);
	};

}]);


myApp.directive('greeting',function(){
	return {
		restrict: 'AE',
		scope: '&',
		template:  '<input type="text" ng-model="username" />'
				 + '<button ng-click="sayHello()">click</button>',
		replace: true
		
	}
});



