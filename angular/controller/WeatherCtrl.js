App.controller("WeatherCtrl", ['$scope','WeatherService', function ($scope,WeatherService) {
	WeatherService.getWeather().then(function(weather) {
		console.log(weather);
	});
}]);