

var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',['$scope',function($scope){

    $scope.items = [
      {
        "title": "Pepples",
        "quantity": 8,
        "price": 3.95
      },
      {
        "title": "Paint pots",
        "quantity": 17,
        "price": 12.95
      },
      {
        "title": "Prunes",
        "quantity": 5,
        "price": 6.95
      }
    ];


    $scope.remove = function(index){
      $scope.items.splice(index, 1);
    }


}]);
