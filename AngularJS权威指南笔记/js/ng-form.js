
var myApp = angular.module('myApp',[]);

myApp.controller('formCtrl',['$scope',function($scope){
    $scope.mesage = "";
    $scope.showMsg = function(){
        $scope.message = "感谢"+$scope.userdata.firstName+"注册！";
    };
}]);
