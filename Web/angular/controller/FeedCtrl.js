var feedcount = 0;
var feeds = [];
var newsfeedindex = 0;

App.controller("FeedCtrl", ['$scope','FeedService', '$interval', 'config', '$rootScope', function ($scope,Feed,$interval,config,$rootScope) {

    getnews = function (url) {
            Feed.parseFeed(url).then(function(res){
            feeds = res.data.responseData.feed.entries;
            $scope.feed = feeds[0];
            feedcount = 1;
        });
    }

    getnews(config.newsFeedRssUrl[newsfeedindex]);

    newsGetterInterval = $interval(function() {
        getnews(config.newsFeedRssUrl[newsfeedindex]);
    }, config.getNewsInterval);

    newsScrollerInterval = $interval(function() {
        $scope.feed = feeds[feedcount];
        feedcount++;
        if(feedcount == feeds.length) {
            feedcount = 0;
        }        
    }, config.newsScrollInterval);

    $rootScope.$on('feed', function (event, data) {
        console.log(data);
        if(data == "right") {
            if(newsfeedindex < config.newsFeedRssUrl.length - 1) {
                newsfeedindex++;
                getnews(config.newsFeedRssUrl[newsfeedindex]);
            }
        }
        if(data == "left") {
            if(newsfeedindex > 0){
                newsfeedindex--;
                getnews(config.newsFeedRssUrl[newsfeedindex]);
            }
        }
    });
}]);