var App = angular.module('MagicMirrorApp', ['ngWebSocket']);

App.constant('config', {
	weatherApiKey: '{ApiKey}',
	weatherCityID: '2746301', // Tilburg
	newsFeedRssUrl: ['http://www.nu.nl/rss/algemeen', 'http://www.nu.nl/rss/tech', 'http://www.nu.nl/rss/sport'],
	newsFeedCategories: ['Algemeen', 'Tech', 'Sport'],
	greetings: ['Hallo Knapperd!', 'Het is een mooie dag', 'Hoe gaat het?', 'Nee das goed dan...'],
	greetingDuration: 10000, // 10 seconds
	getNewsInterval: 3600000, // miliseconds (1 hour) 
	getWheaterInterval: 3600000, // milliseconds (1 hour)
    newsScrollInterval: 30000, // miliseconds (30 seconds)
    newsCategoryShowInterval: 2000, // milliseconds (2 seconds)
    webSocketUrl: "ws://192.168.0.101:8080/"
});