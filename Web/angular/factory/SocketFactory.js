App.factory('WSC', function ($websocket) {
    // Open a WebSocket connection
    var url = "ws://localhost:8080/";
    var ws;

    console.log('start connecting');
    ws = $websocket(url);
    ws.onMessage(function (event) {
        console.log('message: ', event.data);
        var response;
        try {
            response = event.data;
            console.log(response);
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
});