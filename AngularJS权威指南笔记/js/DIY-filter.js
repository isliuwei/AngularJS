var myApp = angular.module('myApp',[]);

myApp.controller('filterCtrl',['$scope',function($scope){
    $scope.msg = "hello everyone! let's study angularjs!";
}]);

myApp.filter('titleCaseFilter',function(){
    return  titleCaseFilter = function(input){
      var words = input.split(' ');
      for(var i = 0; i<words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(' ');
    }
});
