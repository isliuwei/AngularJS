
var myApp = angular.module('myApp',[]);

myApp.controller('showCtrl',['$scope',function($scope){
    $scope.menuState = {
      'show': false
    }
    $scope.toggleMenu = function(){
        $scope.menuState.show = !$scope.menuState.show;
    }
}]);
