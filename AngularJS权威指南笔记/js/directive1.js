var myApp = angular.module('myApp',[]);
myApp.directive('hello',function(){
	return{
		restrict: "AECM",
		template: "<h1 class='bg-primary'>welcome to angular directive</h1>",
		replace: true
	}
});