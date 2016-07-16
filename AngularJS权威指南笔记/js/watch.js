
var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',['$scope',function($scope){

    $scope.obj = {
      'begin':0
    }


    $scope.calcu = function(){
      $scope.obj.end = $scope.obj.begin * 10;
    };

    $scope.$watch('$scope.obj.begin',$scope.calcu());

    $scope.reset = function(){
      $scope.obj.begin = 0;
      $scope.obj.end = 0;
    }

    $scope.submit_form = function(){
      confirm("确认提交?");
    }

}]);
