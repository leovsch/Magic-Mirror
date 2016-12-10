var App = angular.module('MagicMirrorApp', []);

App.constant('config', {
	weatherApiKey: '{ApiKey}',
	weatherCityID: '2746301', // Tilburg
	newsFeedRssUrl: 'http://www.nu.nl/rss/Algemeen',
	greetings: ['Hallo Knapperd!', 'Het is een mooie dag', 'Hoe gaat het?', 'Nee das goed dan...'],
	greetingDuration: 10000, // 10 seconds
	getNewsInterval: 3600000, // miliseconds (1 hour) 
	getWheaterInterval: 3600000, // milliseconds (1 hour)
    newsScrollInterval: 30000 // miliseconds (30 seconds)
});