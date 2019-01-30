App.filter('forecast', function(MathService, dateFilter) {
    return function(input) { 
        forecast = [];
        input[0].main.temp = MathService.kelvinToCelsius(input[0].main.temp);
        input[0].dt_txt = dateFilter(new Date(input[0].dt_txt), 'EEEE');
        forecast.push(input[0]);
        var currentDate = new Date();
        angular.forEach(input, function(value){
            var weatherdate = new Date(value.dt_txt);
            if(weatherdate.getHours() == 12 && weatherdate.getDate() != currentDate.getDate()) {
                value.main.temp = MathService.kelvinToCelsius(value.main.temp);
                value.dt_txt = dateFilter(new Date(value.dt_txt), 'EEEE');
                forecast.push(value);
            }
        });
        return forecast;
    }
});