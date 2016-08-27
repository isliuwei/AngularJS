var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',['$scope','$http',function($scope,$http){
  // $scope.data = {
  //   "title":"Hello word",
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // };
  $scope.getData = function(){
    $scope.data = {
      title: "Hello word",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    // return $scope.data;
    //
    //alert('xx');
  }

}]);
myApp.directive('dropdown',function(){
  return {
    restrict: "AE",
    template: "<div id='container'>"+
              "<div class='title' onselectstart='return false'>{{data.title}}"+
              "</div>"+
              "<div class='content'>{{data.content}}"+
              "</div>"+
              "</div>",
    replace: true,
    link: function(scope,elem,attr,root){
      scope.getData();

      $('.title').on('click',function(){

        // setTimeout(function(){
          $('.content').toggle();
        // },10000);
      });



    }
  }
});
