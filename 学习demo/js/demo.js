
var myApp = angular.module('myApp',[]);

myApp.directive('hello',function(){
	return {
		restrict: 'AECM',
		template: "<h1>hello world!</h1>",
		replace: true
	}
});


myApp.directive('hi',function(){
	return {
		restrict: 'AECM',
		template: "<h1>ng-transclude<h2 ng-transclude></h2></h1>",
		transclude: true
	}
});


// myApp.directive('welcome',function(){
// 	return {
// 		restrict: 'AECM',
// 		templateUrl: "../tpls/welcome.html",
// 		replace: true
// 	}
// });

