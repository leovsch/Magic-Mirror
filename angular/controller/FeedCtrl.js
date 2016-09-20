var feedcount = 0;

App.controller("FeedCtrl", ['$scope','FeedService', '$interval', 'config', function ($scope,Feed,$interval,config) {
    getnews = function () {
            Feed.parseFeed(config.newsFeedRssUrl).then(function(res){
            feeds=res.data.responseData.feed.entries;
            $scope.feed = feeds[0];
            feedcount = 1;
        });
    }

    getnews();

    newsGetterInterval = $interval(function() {
        getnews();
    }, config.getNewsInterval);

    newsScrollerInterval = $interval(function() {
        $scope.feed = feeds[feedcount];
        feedcount++;
        if(feedcount == feeds.length) {
            feedcount = 0;
        }        
    }, config.newsScrollInterval);
}]);