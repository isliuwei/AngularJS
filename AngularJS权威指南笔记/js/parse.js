
  var myApp = angular.module('myApp',[]);

  myApp.controller('MyController',['$scope','$parse',function($scope,$parse){

      $scope.$watch('expr',function(newVal,oldVal,scope){
        if(newVal !== oldVal){
          var parseFun = $parse(newVal);
          $scope.parseValue = parseFun(scope);
        }
      });
      

  }]);
