App.controller("CalendarCtrl", ['$scope', 'CalendarService', '$rootScope', '$interval', 'config', function ($scope,CalendarService,$rootScope,$interval,config) {
	
	$scope.calendarLoaded = false;
	$scope.upcomingEventLocation = false;

	requestCalendar = function() {
		CalendarService.makeApiCall().then(function(apiresponse) {
	    	$scope.events = apiresponse.slice(1, apiresponse.length);
	    	var upcomingEvent = apiresponse[0];
	    	if (!angular.isUndefined(upcomingEvent.location)) {
	    		$scope.upcomingEventLocation = true;
	    		if(upcomingEvent.location.length >= 9){
	    			upcomingEvent.location = upcomingEvent.location.substring(0, upcomingEvent.location.indexOf(','));
	    		}
	    	}	    	
	    	if(upcomingEvent.summary.length >= 9) {
	    		upcomingEvent.summary = upcomingEvent.summary.substring(0, upcomingEvent.summary.indexOf(' '));
	    	}
			$scope.upcomingEvent = upcomingEvent;
			$scope.calendarLoaded = true;
	    });
	}

	$rootScope.$on('Calendar', function(event, data) {
        if(data == true) {        	
            requestCalendar();
            $interval(requestCalendar, config.requestCalendarInterval);
        }
    })
	
}]);