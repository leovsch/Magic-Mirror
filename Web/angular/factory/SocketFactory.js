App.factory('WSC', function (config, $rootScope, $websocket) {
    // Open a WebSocket connection
    console.log(config.webSocketUrl);
    var url = config.webSocketUrl;
    var ws;

    ws = $websocket(url);
    ws.onMessage(function (event) {
        console.log('message: ', event.data);
        var response;
        try {
            response = angular.fromJson(event.data);
            console.log(response);
            $rootScope.$emit(response.ctrl, response.input);
        } catch (e) {
            console.log(e);
        }
    });
    ws.onError(function (event) {
        console.log('connection Error', event);
    });
    ws.onClose(function (event) {
        console.log('connection closed', event);
    });
    ws.onOpen(function () {
        console.log('connection open');
    });

    return {
        status: function () {
            return ws.readyState;
        }
    };
}).run(['WSC', function(WSC) {
    // call a run so that the factory executes 
}]);