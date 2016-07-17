var wechatService = angular.module('wechatService',[]);

wechatService.factory('userList',function(){
    var list = [
        {
            "id": 0,
            "img": "images/1.jpg",
            "show": true,
            "read": false,
            "name": "Venkman",
            "description": "Back off, man. I'm a scientist."
        },
        {
            "id": 1,
            "img": "images/2.jpg",
            "show": true,
            "read": false,
            "name": "Egon",
            "description": "We're gonna go full stream."
        },
        {
            "id": 2,
            "img": "images/3.jpg",
            "show": true,
            "read": false,
            "name": "Ray",
            "description": "Ugly little spud, isn't he?"
        },
        {
            "id": 3,
            "img": "images/4.jpg",
            "show": true,
            "read": false,
            "name": "Winston",
            "description": "That's a big Twinkie."
        },
        {
            "id": 4,
            "img": "images/5.jpg",
            "show": true,
            "read": false,
            "name": "Tully",
            "description": "Okay, who brought the dog?"
        },
        {
            "id": 5,
            "img": "images/1.jpg",
            "show": true,
            "read": false,
            "name": "Egon",
            "description": "We're gonna go full stream."
        },
        {
            "id": 6,
            "img": "images/2.jpg",
            "show": true,
            "read": false,
            "name": "Dana",
            "description": "I am The Gatekeeper!"
        },
        {
            "id": 7,
            "img": "images/3.jpg",
            "show": true,
            "read": false,
            "name": "Slimer",
            "description": "Boo!"
        },
        {
            "id": 8,
            "img": "images/4.jpg",
            "show": true,
            "read": false,
            "name": "Egon",
            "description": "We're gonna go full stream."
        },
        {
            "id": 9,
            "img": "images/5.jpg",
            "show": true,
            "read": false,
            "name": "Egon",
            "description": "We're gonna go full stream."
        },
        {
            "id": 10,
            "img": "images/1.jpg",
            "show": true,
            "read": false,
            "name": "Egon",
            "description": "We're gonna go full stream."
        }
    ];
    var delItem = function (num) {
        list.splice(num,1);
    }
    return {
        getList : function(){
            return list;
        },
        delList : function(num){
            delItem(num);
        }
    }
})