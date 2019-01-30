App.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
        	var requesturl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url);
        	return $http.get(requesturl);
        }
    }
}]);