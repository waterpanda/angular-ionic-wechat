var routerApp = angular.module('routerApp', ['ui.router','angularCtrls']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state("main",{
            url : '/main',
            views :{
                '' : {
                    templateUrl : 'tpls/main.html',
                    controller : 'MainCtrl'
                },
                'header@main' : {
                    templateUrl : 'tpls/header.html'
                },
                'footer@main' : {
                    templateUrl : 'tpls/footer.html',
                    controller : 'FootCtrl'
                }
            }
        })
})