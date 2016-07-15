var myApp = angular.module('myApp',[]);



myApp.controller('myController',['$scope','$timeout',function($scope,$timeout){
  var updateClock = function(){
      $scope.clock = new Date();
      $timeout(function(){
        updateClock();
      },1000);
  };
  updateClock();
}]);
myApp.run(function($rootScope){
  $rootScope.name = "world!";
});

myApp.controller('myCtrl',['$scope',function($scope){
  $scope.name="AngualrJs!";
}]);
