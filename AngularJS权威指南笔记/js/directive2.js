var myApp = angular.module('myApp',[]);

myApp.directive('sign',function(){
	return{
		restrict: 'AECM',
		templateUrl: "tpls/signForm.html",
		replace: true
	}
});