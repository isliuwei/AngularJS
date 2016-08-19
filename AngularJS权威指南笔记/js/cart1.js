
//var myApp = angular.module('myApp',[]);

// var myApp = angular.module('myApp',[],function($provide){

//   $provide.factory('myProvider',['$http',function($http){

//     return [
//         {
//           'id': 'JD0010',
//           'name': '商品一',
//           'price': 200,
//           'number': 1,
//           'stock': 50
//         },
//         {
//           'id': 'JD0310',
//           'name': '商品二',
//           'price': 1200,
//           'number': 1,
//           'stock': 20
//         },
//         {
//           'id': 'JD0012',
//           'name': '商品三',
//           'price': 300,
//           'number': 1,
//           'stock': 40
//         },
//         {
//           'id': 'JD1010',
//           'name': '商品四',
//           'price': 540,
//           'number': 1,
//           'stock': 30
//         },
//         {
//           'id': 'JD4010',
//           'name': '商品五',
//           'price': 100,
//           'number': 1,
//           'stock': 40
//         },
//         {
//           'id': 'JD0210',
//           'name': '商品六',
//           'price': 2000,
//           'number': 1,
//           'stock': 29
//         }

//       ];
    
//   }]);
// });


var myApp = angular.module('myApp',['myFactory']);

myApp.controller('cartCtrl',['$scope','$http','myProvider',function($scope,$http,myProvider){
  // $scope.shopping = [
  //   {
  //     'id': 'JD0010',
  //     'name': '商品一',
  //     'price': 200,
  //     'number': 1,
  //     'stock': 50
  //   },
  //   {
  //     'id': 'JD0310',
  //     'name': '商品二',
  //     'price': 1200,
  //     'number': 1,
  //     'stock': 20
  //   },
  //   {
  //     'id': 'JD0012',
  //     'name': '商品三',
  //     'price': 300,
  //     'number': 1,
  //     'stock': 40
  //   },
  //   {
  //     'id': 'JD1010',
  //     'name': '商品四',
  //     'price': 540,
  //     'number': 1,
  //     'stock': 30
  //   },
  //   {
  //     'id': 'JD4010',
  //     'name': '商品五',
  //     'price': 100,
  //     'number': 1,
  //     'stock': 40
  //   },
  //   {
  //     'id': 'JD0210',
  //     'name': '商品六',
  //     'price': 2000,
  //     'number': 1,
  //     'stock': 29
  //   }

  // ];
  //console.log($scope);
  setTimeout(function(){
    console.log($scope.shopping);
  },2000);
  

  //$scope.shopping = myProvider.getData();
  myProvider.getData(function(data){
    //console.log($scope);
    $scope.shopping = data;
    //console.log($scope.shopping);
    //console.log($scope.shopping);
    //$scope.xx = {};
    //$scope.xx = data;
    //console.log($scope.shopping);

    // $scope.sub = function($index){
    //   //console.log($scope.shopping[$index]);
      
    //   if($scope.shopping[$index].number>0){
    //     $scope.shopping[$index].number--;
    //   }else{
    //     alert("客官！对不起！本小店暂时没有数量为负的商品供应！");
    //   }
    // }

    // $scope.add = function($index){
    //   //console.log($scope.shopping[$index]);
    //   if($scope.shopping[$index].number<$scope.shopping[$index].stock){
    //     $scope.shopping[$index].number++;
    //   }else{
    //     alert("客官！对不起！库存不够啦！");
    //     $scope.shopping[$index].number = $scope.shopping[$index].stock;
    //   }
      
    // }

    // $scope.remove = function($index){
    //   $scope.shopping.splice($index,1);
    // }

    // $scope.numberTotal = function(){
    //   var numberTotal = 0;
    //   for(var i=0; i<$scope.shopping.length; i++){
    //     numberTotal+=$scope.shopping[i].number;
    //   }
    //   return numberTotal;
    // }

    // $scope.priceTotal = function(){
    //   var priceTotal = 0;
    //   for(var i=0; i<$scope.shopping.length; i++){
    //     priceTotal+=($scope.shopping[i].number*$scope.shopping[i].price);
    //   }
    //   return priceTotal;
    // }

    // $scope.clear = function(){
    //   $scope.shopping = {};
    // }









  });

  setTimeout(function(){
    console.log($scope.shopping);
  },2000);
  //console.log($scope.shopping);

  // $scope.sub = function($index){
  //   //console.log($scope.shopping[$index]);
    
  //   if($scope.shopping[$index].number>0){
  //     $scope.shopping[$index].number--;
  //   }else{
  //     alert("客官！对不起！本小店暂时没有数量为负的商品供应！");
  //   }
  // }

  // $scope.add = function($index){
  //   //console.log($scope.shopping[$index]);
  //   if($scope.shopping[$index].number<$scope.shopping[$index].stock){
  //     $scope.shopping[$index].number++;
  //   }else{
  //     alert("客官！对不起！库存不够啦！");
  //     $scope.shopping[$index].number = $scope.shopping[$index].stock;
  //   }
    
  // }

  // $scope.remove = function($index){
  //   $scope.shopping.splice($index,1);
  // }

  // $scope.numberTotal = function(){
  //   var numberTotal = 0;
  //   for(var i=0; i<$scope.shopping.length; i++){
  //     numberTotal+=$scope.shopping[i].number;
  //   }
  //   return numberTotal;
  // }

  // $scope.priceTotal = function(){
  //   var priceTotal = 0;
  //   for(var i=0; i<$scope.shopping.length; i++){
  //     priceTotal+=($scope.shopping[i].number*$scope.shopping[i].price);
  //   }
  //   return priceTotal;
  // }

  // $scope.clear = function(){
  //   $scope.shopping = {};
  // }


  // $scope.checkNumber = function(){
  //   for(var i=0; i<$scope.shopping.length;i++){
  //     $scope.$watch($scope.shopping[i].number,function(newValue,oldValue){
  //       console.log($scope.shopping[i].number);
  //     });
  //   }
  // }

  // $scope.checkNumber();

 

  

  

  

  













}]);