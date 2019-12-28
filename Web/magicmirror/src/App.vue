<template>
  <div id="app">
    <Clock />
    <Weather v-bind:config="config" />
    <Feed v-bind:config="config" />
  </div>
</template>

<script>
import Clock from './components/Clock';
import Weather from './components/Weather';
import Feed from './components/Feed';

export default {
  name: 'app',
  components: {
    Clock,
    Weather,
    Feed
  },
  data() {
    return {
      config: {
        weatherApiKey:'b18493051351936c13a02b5218a12f61',
        weatherCityId:'2746301',
        googleUserId:'{gmail}',
        googleApiKey: '{apikey}',
        googleClientID: '{clientid}.apps.googleusercontent.com',
        newsFeedRssUrl: ['http://www.nu.nl/rss/algemeen', 'http://www.nu.nl/rss/tech', 'http://www.nu.nl/rss/sport', 'http://feeds.feedburner.com/tweakers/games']
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  
}
body {
  background-color: black;
}
</style>
