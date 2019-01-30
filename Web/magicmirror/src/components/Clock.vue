<template>
    <div class="row">
        <div class="col-12 text-center">
            <div>
                <div>
                    <h1>{{ time }}</h1>
                </div>
                <div>
                    <h2>{{ date }}</h2>
                </div>
            </div>
        </div>				
    </div>
</template>

<script>
import moment from 'moment';
moment.locale('nl-NL');

export default {
    name:"Clock",
    data() {

        return {
            time: moment().format('HH:mm'),
            date: moment().format('dddd LL')
        }
    },
    methods: {
        update () {
            this.updating = setInterval(() => {
                this.time = moment().format('HH:mm'),
                this.date = moment().format('dddd LL')
            }, 10000);
        }
    },
    created () {
        this.update();
    }
}

</script>

<style scoped>

</style>
