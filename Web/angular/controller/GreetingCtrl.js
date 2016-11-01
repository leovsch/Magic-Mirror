App.controller("GreetingCtrl", ['$scope', '$interval', 'config', 'MathService', function ($scope,$interval,config, MathService) { 
	$scope.greeting = config.greetings[MathService.drawRandomNumber(0, config.greetings.length)]

	newsGreeting = $interval(function() {
        $scope.greeting = "";      
    }, config.greetingDuration, 1);
}]);