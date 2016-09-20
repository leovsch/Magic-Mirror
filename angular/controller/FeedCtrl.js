var feedcount = 0;
var getNewsInterval = 3600000; // miliseconds (1 hour)
var newsScrollInterval = 30000; // miliseconds (30 seconds)

App.controller("FeedCtrl", ['$scope','FeedService', '$interval', function ($scope,Feed,$interval) {
    getnews = function () {
            Feed.parseFeed('http://www.nu.nl/rss/Algemeen').then(function(res){
            feeds=res.data.responseData.feed.entries;
            $scope.feed = feeds[0];
            feedcount = 1;
        });
    }

    getnews();

    newsGetterInterval = $interval(function() {
        getnews();
    }, getNewsInterval);

    newsScrollerInterval = $interval(function() {
        $scope.feed = feeds[feedcount];
        feedcount++;
        if(feedcount == feeds.length) {
            feedcount = 0;
        }        
    }, newsScrollInterval);
}]);