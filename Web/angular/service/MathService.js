App.service('MathService', function() {
	return {
		kelvinToCelsius: function(kelvin) {
			return Math.ceil(kelvin - 272.15);
		},
		drawRandomNumber: function(min, max) {
			return Math.floor((Math.random() * max) + min);
		}
	}
});