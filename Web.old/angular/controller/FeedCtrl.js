var feedcount = 0;
var feeds = [];
var newsfeedindex = 0;

App.controller("FeedCtrl", ['$scope','FeedService', '$interval', 'config', '$rootScope', function ($scope,Feed,$interval,config,$rootScope) {

    $scope.ShowChevronLeft = false;
    $scope.ShowChevronRight = true;

    getnews = function (url) {
        Feed.parseFeed(url).then(function(res) {
            feeds = res.data.items;
            $scope.feed = feeds[0];
            feedcount = 1;
        });
    }

    showHideChevron = function() {
        if(newsfeedindex == 0) {
            $scope.ShowChevronLeft = false;
            $scope.ShowChevronRight = true;
        }
        if(newsfeedindex == config.newsFeedRssUrl.length - 1) {
            $scope.ShowChevronLeft = true;
            $scope.ShowChevronRight = false;
        }
        if(newsfeedindex > 0 && newsfeedindex < config.newsFeedRssUrl.length - 1) {
            $scope.ShowChevronLeft = true;
            $scope.ShowChevronRight = true;
        }
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
        console.log('hoi')
        if(data == "right") {
            if(newsfeedindex < config.newsFeedRssUrl.length - 1) {
                newsfeedindex++;
                getnews(config.newsFeedRssUrl[newsfeedindex]);
                showHideChevron();
            }
        }
        if(data == "left") {
            if(newsfeedindex > 0){
                newsfeedindex--;
                getnews(config.newsFeedRssUrl[newsfeedindex]);
                showHideChevron();
            }
        }
    });
}]);