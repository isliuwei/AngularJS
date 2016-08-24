
var myApp = angular.module('myApp',[]);
// myApp.controller('myCtrl', ['$scope', function($scope){
// 	$scope.show = function(){
// 		console.log()
// 	}
	
// }])

myApp.directive('superman',function(){
	return{
		restrict: 'ACEM',
		scope: {},
		controller: function($scope){
			$scope.abilities = ["superman"];
			this.addStrength = function(){
				$scope.abilities.push('strength');
			};
			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};
			this.addGlow = function(){
				$scope.abilities.push('glow');
			};
		},
		link: function(scope,element,attrs){
			element.addClass('btn btn-primary');
			element.bind('mouseenter',function(){
				console.log(scope.abilities);
			});
		}
	}
});

myApp.directive('strength',function(){
	return{
		require: '^superman',
		link: function(scope,element,attrs,superCtrl){
			element.addClass('btn btn-success');
			superCtrl.addStrength();
		}
	}
});

myApp.directive('speed',function(){
	return{
		require: '^superman',
		link: function(scope,element,attrs,superCtrl){
			element.addClass('btn btn-warning');
			superCtrl.addSpeed();
		}
	}
});

myApp.directive('glow',function(){
	return{
		require: '^superman',
		link: function(scope,element,attrs,superCtrl){
			element.addClass('btn btn-danger');
			superCtrl.addGlow();
		}
	}
});