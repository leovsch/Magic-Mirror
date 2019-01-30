<template>
  <div id="app">
    <Clock />
    <Weather v-bind:config="config" />
  </div>
</template>

<script>
import Clock from './components/Clock';
import Weather from './components/Weather';

export default {
  name: 'app',
  components: {
    Clock,
    Weather
  },
  data() {
    return {
      config: {
        weatherApiKey:'{apikey}',
        weatherCityId:'2746301',
        googleUserId:'{gmail}',
        googleApiKey: '{apikey}',
	      googleClientID: '{clientid}.apps.googleusercontent.com'
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
