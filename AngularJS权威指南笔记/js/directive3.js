var myApp = angular.module('myApp',[]);
myApp.directive('admin',function(){
	return{
		restrict: 'ACEM',
		templateUrl: function(elem,attr){
			return "tpls/"+attr.type+"Form.html";
		}
	}
});
