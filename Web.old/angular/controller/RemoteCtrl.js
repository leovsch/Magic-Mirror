App.controller("RemoteCtrl", ['$scope', '$rootScope', '$interval', 'config', 'WSC', function ($scope,$rootScope,$interval,config, WSC) {
    
    $scope.LeftCheveronClick = function() {
        var message = {
            ctrl: "feed",
            input: "left"
        }
        WSC.sendMessage(message);
    };

    $scope.RightCheveronClick = function() {
        var message = {
            ctrl: "feed",
            input: "right"
        }
        WSC.sendMessage(message);
    };
}]);