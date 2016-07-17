var angularFilter = angular.module('angularFilter', []);

angularFilter.filter('getButtonClass', function () {
    return function (index, on) {
        var className;
        switch (index) {
            case 0 :
                if (on) {
                    className = 'icon ion-ios-chatbubble';
                } else {
                    className = 'icon ion-ios-chatbubble-outline'
                }
                break;
            case 1 :
                if (on) {
                    className = 'icon ion-ios-list';
                } else {
                    className = 'icon ion-ios-list-outline'
                }
                break;
            case 2 :
                if (on) {
                    className = 'icon ion-ios-people';
                } else {
                    className = 'icon ion-ios-people-outline'
                }
                break;
        }
        return className;
    }
})

angularFilter.filter('changeFace', function () {
    return function (item, num) {
        for (var i = 0; i < num; i++) {
            item = item + '☺';
        }
        return item;
    }
});

angularFilter.filter('readTag', function () {
    return function (read, num) {
        if (( read == true ) && ( num == 1)) {
            read = '已读';
        } else if (( read == true ) && ( num == 0)) {
            read = '';
        } else {
            read = '未读';
        }
        return read;
    }
});

angularFilter.filter('selectTit',function () {
    return function (arr) {
        var tit = '';
        for (var i in arr) {
            if (arr[i].on){
                tit = arr[i].name;
            }
        }
        return tit;
    }
})