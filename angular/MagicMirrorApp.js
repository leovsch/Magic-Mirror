var App = angular.module('MagicMirrorApp', []);

App.constant('config', {
	weatherApiKey: '5293a704219ccdabd23ca6808d1a8f4f',
	weatherCityID: '2746301',
	newsFeedRssUrl: 'http://www.nu.nl/rss/Algemeen',
	getNewsInterval: 3600000, // miliseconds (1 hour)
    newsScrollInterval: 30000 // miliseconds (30 seconds)
});