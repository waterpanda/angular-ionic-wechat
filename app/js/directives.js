var wechatDirect = angular.module('wechatDirect',[]);

wechatDirect.directive('chat',function(){
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/content/chat.html'
    }
});

wechatDirect.directive('adress',function(){
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/content/adress.html'
    }
});

wechatDirect.directive('find',function(){
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/content/find.html'
    }
});