var App = angular.module('MagicMirrorApp', []);

App.constant('config', {
	weatherApiKey: '{ApiKey}',
	weatherCityID: '2746301', // Tilburg
	newsFeedRssUrl: 'http://www.nu.nl/rss/Algemeen',
	getNewsInterval: 3600000, // miliseconds (1 hour)
    newsScrollInterval: 30000 // miliseconds (30 seconds)
});