
var AMail = angular.module('AMail',['ngRoute','appCtrl']);

AMail.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'ListController',
        templateUrl: 'tpls/list.html'
    }).when('/view/:id',{// 注意,为了创建详情视图,我们在 id 前面加了一个冒号,从而指定了一个参数化的 URL 组件
        controller: 'DetailController',
        templateUrl: 'tpls/detail.html'
    }).otherwise({
        redirectTo: '/'
    })
});
