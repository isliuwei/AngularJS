var myApp = angular.module('myApp',[]);


myApp.controller('myCtrl',['$scope',function($scope){
	$scope.body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque harum maxime rem quaerat modi suscipit explicabo sapiente, velit a corporis saepe sequi optio atque eos necessitatibus quidem, sint. Voluptates, sapiente.';
}]);



myApp.directive('expander',function(){
	return {
		restrict: 'AE',
		scope: {
			expanderTitle: '@title'
		},
		template:  '<div class="expander">'
					 + '<div ng-click="toggle()"  class="expander-title">{{expanderTitle}}</div>'
					 + '<div class="expander-body" ng-show="isShow" ng-transclude>{{body}}</div>'
				  +'</div>',
		replace: true,
		transclude: true,
		link: function(scope,element){
			scope.isShow = false;
			scope.toggle = function(){
				scope.isShow = !scope.isShow;
			}
		}
	}
});



