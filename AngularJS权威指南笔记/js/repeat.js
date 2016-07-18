

var myApp = angular.module('myApp',[]);

myApp.controller('bookCtrl',['$scope',function($scope){
    $scope.books = [
      {
        'ID': "0010",
        'name': "《javascript高级程序设计》",
        'author': "佚名"
      },
      {
        'ID': "0010",
        'name': "《javascript高级程序设计》",
        'author': "佚名"
      },
      {
        'ID': "0010",
        'name': "《javascript高级程序设计》",
        'author': "佚名"
      },
      {
        'ID': "0010",
        'name': "《javascript高级程序设计》",
        'author': "佚名"
      }
    ];
    $scope.selected = function(row) {
      $scope.selectedRow = row;
    };
}]);
