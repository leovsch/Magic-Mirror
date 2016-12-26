var currentNewsCatIndex = 0;

App.controller("GreetingCtrl", ['$scope', '$interval', 'config', 'MathService', '$rootScope', function ($scope,$interval,config, MathService, $rootScope) { 
	$scope.greeting = config.greetings[MathService.drawRandomNumber(0, config.greetings.length)]

	newsGreeting = $interval(clearGreeting, config.greetingDuration, 1);

    $rootScope.$on('feed', function (event, data) { 
    	if(data == "right") {
            if(currentNewsCatIndex < config.newsFeedCategories.length - 1) {
                currentNewsCatIndex++;
                $scope.greeting = config.newsFeedCategories[currentNewsCatIndex];
                $interval.cancel(newsGreeting);
                newsGreeting = $interval(clearGreeting, 2000, 1);
            }
        }
        if(data == "left") {
            if(currentNewsCatIndex > 0){
                currentNewsCatIndex--;
                $scope.greeting = config.newsFeedCategories[currentNewsCatIndex];
                $interval.cancel(newsGreeting);
                newsGreeting = $interval(clearGreeting, 2000, 1);
            }
        }
    });

    function clearGreeting() {
    	$scope.greeting = ""; 
    }
}]);