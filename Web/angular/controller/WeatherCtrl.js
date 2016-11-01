App.controller("WeatherCtrl", ['$scope','WeatherService', '$filter', '$interval', 'config', function ($scope,WeatherService, $filter, $interval, config) {
	
	setWeather = function() {
		WeatherService.getWeather().then(function(weather) {
			$scope.forecast = $filter('forecast')(weather.list);
		});		
	}

	setWeather();
	$interval(setWeather, config.getWheaterInterval);
}]);