<template>
    <div class="col-md-2 col-md-2-nopadding vcenter weather">
        <div class="today" v-if="currentWeather !== null">
            <img :src="currentWeather.weather[0].icon" :alt="currentWeather.weather[0].iconBig" />
            <h2>{{currentWeather.main.temp}} &deg;C</h2>
            <h2>{{currentWeather.dt_txt}}</h2>
        </div>
        <table class="table" v-if="forecast !== null">
            <tr v-bind:key="weather.dt" v-for="weather in forecast">
                <td><img :src="weather.weather[0].icon" :alt="weather.weather[0].icon" /></td>
                <td>{{weather.main.temp}} &deg;C <br />{{weather.dt_txt}}</td>
            </tr>
        </table>					
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import MathService from './MathService'

export default {    
    name:"Weather",
    props:["config"],
    data () {
        return {
            currentWeather: null,
            forecast: null
        }
    },
    
    mounted () {
        this.retrieveWheather();
        this.update();
    },
    methods: {
        retrieveWheather() {
            axios
            .get('http://api.openweathermap.org/data/2.5/forecast?id=' + this.config.weatherCityId + '&APPID=' + this.config.weatherApiKey)
            .then(response => {
                var data = response.data.list;
                this.forecast = [];
                var list = this.forecast;
                this.currentWeather = data[0];
                this.currentWeather.weather[0].icon = '/assets/img/weather-icons/' + this.currentWeather.weather[0].icon + '.png';
                this.currentWeather.main.temp = MathService.methods.kelvinToCelsius(data[0].main.temp);
                this.currentWeather.dt_txt = moment(data[0].dt_txt).format('DD-MM');
                var currentDate = new Date();

                data.forEach(function(weatherItem) {
                    var weatherdate = new Date(weatherItem.dt_txt);
                    if(weatherdate.getHours() == 12 && weatherdate.getDate() != currentDate.getDate()) {
                        weatherItem.main.temp = MathService.methods.kelvinToCelsius(weatherItem.main.temp);
                        weatherItem.dt_txt = moment(weatherItem.dt_txt).format('DD-MM');
                        weatherItem.weather[0].icon = '/assets/img/weather-icons/' + weatherItem.weather[0].icon + '.png';
                        list.push(weatherItem);
                    }
                });
            })
        },
        update () {
            this.updating = setInterval(() => {
                this.retrieveWheather();
            }, 1800000 );
        }
    }
}
</script>

<style scoped>

</style>
