

angular.module('myApp',[])
  .controller('MainController', function($scope){
    $scope.submitForm = function(){
      console.log('表单提交了！');
    }
  })
