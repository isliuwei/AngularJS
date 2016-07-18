var myApp = angular.module('myApp',[]);

myApp.controller('parentController',['$scope',function($scope){
        $scope.parent = {
            'show': "parentController"
        };
}]).controller('childController',['$scope',function($scope){
        $scope.child = {
            'show': "childController"
        };

}]);
