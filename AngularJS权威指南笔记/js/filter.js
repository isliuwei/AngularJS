
var myApp = angular.module('myApp',[]);

myApp.controller('MyController',['$scope',function($scope){
    $scope.today = new Date();
    $scope.isCapitalized = function(str){
      return str[0] == str[0].toUpperCase();
    };
}]);


myApp.filter('capitalize',function(){
    return function(input){
      if(input){
        return input[0].toUpperCase()+input.slice(1);
      }
    };
});
