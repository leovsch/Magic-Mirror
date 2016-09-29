App.controller("WeatherCtrl", ['$scope','WeatherService', '$filter', function ($scope,WeatherService, $filter) {
	WeatherService.getWeather().then(function(weather) {
		setWeather(weather);
	});

	setWeather = function(weather) {
		console.log(weather);
		$scope.forecast = $filter('forecast')(weather.list);
	}
}]);