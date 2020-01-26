<template>
    <div></div>
</template>
<script>
import GAuth from 'vue-google-oauth2';
export default {
    name:"Calendar",
    props: ["config"],
    data () {
        return {
            GoogleAuth: null
        }
    },
    mounted () {
        this.inittializeOauth();
        this.GoogleAuth.signIn();
    },
    methods: {
        inittializeOauth() {
            GAuth.clientId = this.config.googleClientID;
            GAuth.apiKey = this.config.googleApiKey;
            GAuth.scope = 'https://www.googleapis.com/auth/calendar.readonly';
            GAuth.discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
            this.$gAuth.getAuthCode();
        }
    }
}
</script>

<style scoped>

</style>