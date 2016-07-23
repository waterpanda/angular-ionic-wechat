var angularCtrls = angular.module('angularCtrls', ['ionic']);

angularCtrls.controller('MainCtrl',['$scope',
    function ($scope) {
        $scope.buttons = [
            {
                on: true,
                name: '微信',
                tab: 'chat'
            },
            {
                on: false,
                name: '通讯录',
                tab: 'adress'
            },
            {
                on: false,
                name: '发现',
                tab: 'finds'
            }
        ]
    }
])

angularCtrls.controller('FootCtrl', ['$scope',
    function ($scope) {
        $scope.change = function (num) {
            for (var i in $scope.buttons) {
                if (i == num) {
                    $scope.buttons[i].on = true;
                } else {
                    $scope.buttons[i].on = false;
                }
            }
        }
    }
]);
angularCtrls.controller('ChatCtrl', ['$scope', '$ionicPopup', '$timeout', '$http','userList','$state',
    function ($scope, $ionicPopup, $timeout, $http,userList,$state) {
        //微信列表
        $scope.items = userList.getList();
        //
        $scope.goMessage = function (id) {
            $state.go('messageDetil',{'ID':id});
        }
        //  confirm 对话框
        $scope.read = function (isRead, num) {
            var state = '';
            if (isRead) {
                state = '未读';
            } else {
                state = '已读';
            }
            var confirmPopup = $ionicPopup.confirm({
                title: '标记为' + state + '?',
                template: '标记为' + state + '?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('标记为' + state);
                    //修改原来的状态值
                    $scope.items[num].read = !isRead;
                } else {
                    console.log('没有标记');
                }
            });
        };
        $scope.delete = function (num) {
            var alertPopup = $ionicPopup.confirm({
                title: '你真的那么忍心删除我吗？',
                template: '你真的那么忍心删除我吗？'
            });
            alertPopup.then(function (res) {
                if (res) {
                    //$scope.items[num].show = !$scope.items[num].show;
                    userList.delList(num);
                    console.log('谢谢你那么忍心');
                }
            });
        };
        $scope.doRefresh = function () {
            $http.get('data/chat.json')  //注意改为自己本站的地址，不然会有跨域问题
                .success(function (newItems) {
                    $scope.items = newItems;
                })
                .finally(function () {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
    }
]);

angularCtrls.controller('AdressCtrl', ['$scope',
    function ($scope) {
        //通讯录
        $scope.contact_items = [
            {
                "index": "A",
                "list": [
                    {
                        "id": 1,
                        "img": "images/1.jpg",
                        "name": "A_A",
                        "description": "Back off, man. I'm a scientist."
                    },
                    {
                        "id": 2,
                        "img": "images/2.jpg",
                        "name": "A_A",
                        "description": "We're gonna go full stream."
                    },
                    {
                        "id": 3,
                        "img": "images/3.jpg",
                        "name": "A_A",
                        "description": "Ugly little spud, isn't he?"
                    },
                    {
                        "id": 4,
                        "img": "images/4.jpg",
                        "name": "A_A",
                        "description": "That's a big Twinkie."
                    },
                    {
                        "id": 5,
                        "img": "images/5.jpg",
                        "name": "A_A",
                        "description": "Okay, who brought the dog?"
                    }
                ]
            },
            {
                "index": "B",
                "list": [
                    {
                        "id": 6,
                        "img": "images/1.jpg",
                        "name": "B_B",
                        "description": "Back off, man. I'm a scientist."
                    },
                    {
                        "id": 7,
                        "img": "images/2.jpg",
                        "name": "B_B",
                        "description": "We're gonna go full stream."
                    },
                    {
                        "id": 8,
                        "img": "images/3.jpg",
                        "name": "B_B",
                        "description": "Ugly little spud, isn't he?"
                    },
                    {
                        "id": 9,
                        "img": "images/4.jpg",
                        "name": "B_B",
                        "description": "That's a big Twinkie."
                    },
                    {
                        "id": 10,
                        "img": "images/5.jpg",
                        "name": "B_B",
                        "description": "Okay, who brought the dog?"
                    }
                ]
            },
            {
                "index": "C",
                "list": [
                    {
                        "id": 11,
                        "img": "images/1.jpg",
                        "name": "C_C",
                        "description": "Back off, man. I'm a scientist."
                    },
                    {
                        "id": 12,
                        "img": "images/2.jpg",
                        "name": "C_C",
                        "description": "We're gonna go full stream."
                    },
                    {
                        "id": 13,
                        "img": "images/3.jpg",
                        "name": "C_C",
                        "description": "Ugly little spud, isn't he?"
                    },
                    {
                        "id": 14,
                        "img": "images/4.jpg",
                        "name": "C_C",
                        "description": "That's a big Twinkie."
                    },
                    {
                        "id": 15,
                        "img": "images/5.jpg",
                        "name": "C_C",
                        "description": "Okay, who brought the dog?"
                    }
                ]
            },
        ];
    }
]);

angularCtrls.controller('FindCtrl',['$scope',
    function ($scope) {
        $scope.qweqwe = [];
    }
]);
angularCtrls.controller('leftCtrl',['$scope',
    function ($scope) {
        $scope.wechat = 'WaterPanda'
    }
]);
angularCtrls.controller('messageCtrl',['$scope',
    function ($scope) {
        $scope.messageDetils = [
            {
                time : '1999.12.1',
                pic : 'images/1.jpg',
                content : '今天天气不错啊',
                isFromeMe : false,
                
            }
        ]
    }
]);
