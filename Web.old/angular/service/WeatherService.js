App.service('WeatherService', function ($q, $http, config) { 
	return {
    	getWeather: function () {
            var weather = $q.defer();
            $http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + config.weatherCityID + '&APPID=' + config.weatherApiKey)
                    .success(function (data) {
                        weather.resolve(data);
                    });
            return weather.promise;
        }
    }
});