App.controller("WeatherCtrl", ['$scope','WeatherService', '$filter', '$interval', 'config', function ($scope,WeatherService, $filter, $interval, config) {
	console.log("hoi");
	setWeather = function() {
		WeatherService.getWeather().then(function(weather) {
			if(!angular.isUndefined(weather.list)) {
				var forecast = $filter('forecast')(weather.list);
				$scope.forecast = forecast.slice(1, forecast.length);
				$scope.currentWeather = forecast[0];
			}
		});		
	}

	setWeather();
	$interval(setWeather, config.getWheaterInterval);
}]);