

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

    $scope.totalCart = function(){
      var total = 0;
      for(var i=0; i<$scope.items.length; i++){
        total+=$scope.items[i].quantity*$scope.items[i].price;
      }
      return total;

    }



    $scope.$watch($scope.totalCart,function(newValue,oldValue,scope){
      //debugger;
      $scope.discount = newValue > 500 ? 10 : 0;

    });


    $scope.subtotal = function() {
      return $scope.totalCart() - $scope.discount;
    };







}]);
