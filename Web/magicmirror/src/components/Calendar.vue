<template>
    <div>
        <table class="table" >
            <tr v-bind:key="event.id" v-for="event in orderedEvents">
                <td>
                    <span>{{ event.start.dateTime | date : 'dd-MM'}} {{event.summary}}</span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import googleauth from 'val-loader!./fetch-script';
import _ from 'lodash';
export default {
    name:"Calendar",
    props: ["config"],
    data () {
        return {
            events: [],
            SCOPE: 'https://www.googleapis.com/auth/calendar.readonly',
            DISCOVERYDOCS:['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
        }
    },
    computed: {
       gapi: function () { return window.gapi; },
       orderedEvents:  function () {
            return _.orderBy(this.events, 'start.dateTime')
        }
    },
    mounted () {
        this.startGoogleClient();
    },
    methods: {
        requestCalendarEvents() {
            var calendarIdRequest = this.gapi.client.request({
                path: '/calendar/v3/users/me/calendarList',
                method: 'get',
                params: {
                    'showDeleted':false
                }
            });
            calendarIdRequest.execute((resp) => {
                var ids = resp;
                resp.items.forEach((item) => {
                    var request = this.gapi.client.request({
                        path: '/calendar/v3/calendars/' + item.id + '/events',
                        method: 'get',
                        params: {
                            'timeMin': (new Date()).toISOString(),
                            'showDeleted': false,
                            'singleEvents': true,
                            'maxResults': 6,
                            'orderBy': 'startTime'
                        }
                    });
                    request.execute((resp) => {
                        resp.items.forEach((event) => {
                            this.events.push(event);
                        });
                    });
                });
                console.log(this.events);
            });

            
        },
        initClient() {
            this.gapi.client.init({
                apiKey: this.config.googleApiKey,
                discoveryDocs: this.DISCOVERYDOCS,
                clientId: this.config.googleClientID,
                scope: this.SCOPE
            }).then(() => {
                var GoogleAuth = this.gapi.auth2.getAuthInstance();
                
                // Listen for sign-in state changes.
                GoogleAuth.isSignedIn.listen(this.updateSignInStatus);
                var signedIn = GoogleAuth.isSignedIn.get();
                this.updateSignInStatus(signedIn);
                if(!signedIn) {
                    GoogleAuth.signIn();
                }                
            });
        },
        updateSignInStatus(isSignedIn) {
            if(isSignedIn) {
                this.requestCalendarEvents();
            }
        },
        startGoogleClient() {

            this.gapi.load('client:auth2', this.initClient);
        }
    }
    
}
</script>

<style scoped>

</style>