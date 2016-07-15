
var myApp = angular.module('myApp',[]);

myApp.controller('CalcuController',['$scope','$rootScope',function($scope,$rootScope){
    // $rootScope.counter=1;
    $scope.counter=0;
    $scope.add = function(num){
      $scope.counter+=num;
    };

    $scope.subtract = function(num){
      $scope.counter-=num;
    };

}]);


myApp.controller('objController',['$scope',function($scope){
    $scope.person = {
      'name': 'lisi',
      'age': 23,
      'sex': 'male'
    }
}]);
