App.service('MathService', function() {
	return {
		kelvinToCelsius: function(kelvin) {
			return Math.ceil(kelvin - 272.15);
		}
	}
});