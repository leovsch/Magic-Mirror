App.controller("CalendarCtrl", ['$scope', 'CalendarService', '$rootScope', function ($scope,CalendarService,$rootScope) {
	$scope.calendarLoaded = false;
	$rootScope.$on('Calendar', function(event, data) {
        if(data == true) {
        	console.log("making api call");
            CalendarService.makeApiCall().then(function(apiresponse) {
            	$scope.events = apiresponse.slice(1, apiresponse.length);
            	var upcomingEvent = apiresponse[0];
            	if(upcomingEvent.location.length >= 19){
            		upcomingEvent.location = upcomingEvent.location.substring(0, upcomingEvent.location.indexOf(','));
            	}
				$scope.upcomingEvent = upcomingEvent;
				$scope.calendarLoaded = true;
            });
        }
    }) 
	
}]);