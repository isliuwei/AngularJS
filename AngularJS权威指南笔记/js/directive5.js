
var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.getData = function(){
		console.log("加载数据中。。。。。。");
	}
	
}]);
myApp.controller('myCtrl1', ['$scope', function($scope){
	$scope.getData1 = function(){
		console.log("加载数据1中。。。。。。");
	}
	
}]);
myApp.controller('myCtrl2', ['$scope', function($scope){
	$scope.getData2 = function(){
		console.log("加载数据2中。。。。。。");
	}
	
}]);
// myApp.directive('load',function(){
// 	return{
// 		restrict: 'AE',
// 		template: "<h2 class='text-primary'>滑入加载</h2>",
// 		replace: true,
// 		link: function(scope,element,attr){
			
// 			element.bind('mouseenter',function(){
// 				//scope.getData();
// 				scope.$apply('getData()');
// 			});




// 		}
// 	}
// });


myApp.directive('load',function(){
	return{
		restrict: 'AE',
		template: "<h2 class='text-primary'>滑入加载</h2>",
		replace: true,
		link: function(scope,element,attrs){
			
			element.bind('mouseenter',function(){
				//scope.getData();
				if(attrs.howtoload){
					scope.$apply(attrs.howtoload+"()");

				}else{
					scope.$apply('getData()');
				}
			});

		}
	}
});