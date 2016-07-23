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
                },
                'leftMenu@main' : {
                    templateUrl : 'tpls/leftMenu.html',
                    controller : 'leftCtrl'
                }
            }
        })
        .state("message",{
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
                },
                'leftMenu@main' : {
                    templateUrl : 'tpls/leftMenu.html',
                    controller : 'leftCtrl'
                }
            }
        })
        .state("messageDetil",{
            url : '/messageDetil/:ID',
            templateUrl : 'tpls/content/message.html',
            controller : 'messageCtrl'
        })
})