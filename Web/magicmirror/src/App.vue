<template>
  <div id="app">
    <Clock />
    <Weather v-bind:config="config" />
    <Feed v-bind:config="config" />
    <Calendar v-bind:config="config"/>
  </div>
</template>

<script>
import Clock from './components/Clock';
import Weather from './components/Weather';
import Feed from './components/Feed';
import Calendar from './components/Calendar'

export default {
  name: 'app',
  
  components: {
    Clock,
    Weather,
    Feed,
    Calendar
  },
  data() {
    return {
      config: {
        weatherApiKey:'{WhetherApiKey}',
        weatherCityId:'2746301',
        googleApiKey: '{ApiKey}',
        googleClientID: '{ClientId}.apps.googleusercontent.com',
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
