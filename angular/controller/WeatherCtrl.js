App.controller("WeatherCtrl", ['$scope','WeatherService', '$filter', function ($scope,WeatherService, $filter) {
	WeatherService.getWeather().then(function(weather) {
		console.log(weather);
		setWeather(weather);
	});

	setWeather = function(weather) {
		$scope.forecast = $filter('forecast')(weather.list);
		console.log(forecast);
	}
}]);