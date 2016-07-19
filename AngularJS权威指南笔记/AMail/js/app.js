
var AMail = angular.module('AMail',['ngRoute','appCtrl']);

AMail.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'ListController',
        templateUrl: 'tpls/list.html'
    }).when('/view/:id',{
        controller: 'DetailController',
        templateUrl: 'tpls/detail.html'
    }).otherwise({
        redirectTo: '/'
    })
});
