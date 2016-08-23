var myApp = angular.module('myApp',[]);

myApp.directive('hello',function(){
	return {
		restrict: 'ACEM',
		transclude: true,
		template: "<h1 class='text-danger'>transclude</h1><div ng-transclude></div>"
	}
});