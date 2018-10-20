var App = angular.module('MagicMirrorApp', ['ngWebSocket']);

App.constant('config', {
	googleApiKey: 'AIzaSyDGQ5qmIFXCgyT_Lm2s1RE9aHcWUVPyAdE',
	googleClientID: '986546369533-5ej2n0b8mucit12nirdcsqspgp6h73s6.apps.googleusercontent.com',
	weatherApiKey: 'ce3361073b484acd3b882fd44794114d',
	weatherCityID: '2746301', // Tilburg
	newsFeedRssUrl: ['http://www.nu.nl/rss/algemeen', 'http://www.nu.nl/rss/tech', 'http://www.nu.nl/rss/sport', 'http://feeds.feedburner.com/tweakers/games'],
	newsFeedCategories: ['Algemeen', 'Tech', 'Sport', 'Games'],
	greetings: ['Hallo Knapperd!', 'Het is een mooie dag', 'Hoe gaat het?', 'Nee das goed dan...'],
	greetingDuration: 10000, // 10 seconds
	getNewsInterval: 3600000, // miliseconds (1 hour) 
	getWheaterInterval: 3600000, // milliseconds (1 hour)
    newsScrollInterval: 30000, // miliseconds (30 seconds)
    newsCategoryShowInterval: 2000, // milliseconds (2 seconds)
    requestCalendarInterval: 3600000, // milliseconds (1 hour)
    webSocketUrl: "ws://192.168.0.101:8080/"
});