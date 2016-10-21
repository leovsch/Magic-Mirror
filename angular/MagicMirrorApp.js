var App = angular.module('MagicMirrorApp', []);

App.constant('config', {
	weatherApiKey: '5293a704219ccdabd23ca6808d1a8f4f',
	weatherCityID: '2746301', // Tilburg
	newsFeedRssUrl: 'http://www.nu.nl/rss/Algemeen',
	greetings: ['Hallo Knapperd!', 'Het is een mooie dag', 'Hoe gaat het?'],
	greetingDuration: 10000, // 30 seconds
	getNewsInterval: 3600000, // miliseconds (1 hour) 
	getWheaterInterval: 3600000, // milliseconds (1 hour)
    newsScrollInterval: 30000 // miliseconds (30 seconds)
});