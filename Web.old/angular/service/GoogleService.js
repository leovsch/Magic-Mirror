App.factory('GoogleService', ['$rootScope', '$q', 'config', function($rootScope, $q, config) {
    function handleClientLoad() {
        // Loads the client library and the auth2 library together for efficiency.
        // Loading the auth2 library is optional here since `gapi.client.init` function will load
        // it if not already loaded. Loading it upfront can save one network request.
        console.log("init google client");
        gapi.load('client:auth2', initClient);
    }

    function initClient() {
        // Initialize the client with API key and People API, and initialize OAuth with an
        // OAuth 2.0 client ID and scopes (space delimited string) to request access.
        gapi.client.init({
            apiKey: config.googleApiKey,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest', 'https://www.googleapis.com/discovery/v1/apis/fitness/v1/rest'],
            clientId: config.googleClientID,
            scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.activity.write https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.location.write https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.body.write'
        }).then(function() {
            console.log("init client finished");
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

            // Sign in
            gapi.auth2.getAuthInstance().signIn();
        });
    }

    function updateSigninStatus(isSignedIn) {
        // When signin status changes, this function is called.
        // If the signin status is changed to signedIn, we make an API call.
        if (isSignedIn) {
            $rootScope.$emit('Calendar', isSignedIn);
        }
    }

    function handleSignInClick(event) {
        // Ideally the button should only show up after gapi.client.init finishes, so that this
        // handler won't be called before OAuth is initialized.
        gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
    }

    handleClientLoad();

    return {
        requestCalendarEvents: function() {
            var apiresponse = $q.defer();
            var request = gapi.client.request({
                path: '/calendar/v3/calendars/' + config.googleUserId + '/events',
                method: 'get',
                params: {
                	'calendarId': 'primary',
          			'timeMin': (new Date()).toISOString(),
          			'showDeleted': false,
          			'singleEvents': true,
          			'maxResults': 6,
          			'orderBy': 'startTime'
                }
            });
            request.execute(function(resp) {
                var events = resp.items;
                apiresponse.resolve(resp.items);
            });
            return apiresponse.promise;
        },

        requestFitDataSources: function() {
            var apiresponse = $q.defer();
            var request = gapi.client.request({
                path: '/fitness/v1/users/me/dataSources',
                method: 'get',
                params: {

                }
            });
            request.execute(function(resp) {
                var dataSources = [];
                angular.forEach(resp.dataSource, function(value){
                    dataSources.push(value.dataStreamId);                    
                });
                apiresponse.resolve(dataSources);
            });
            return apiresponse.promise;
        },

        requestFitDataFromSoure: function(source) {
            var apiresponse = $q.defer();
            var request = gapi.client.request( {
                path: '/fitness/v1/users/me/dataSources/' + source + '/datasets/1483225200000-1489612009357',
                method: 'get',
                params: {

                }
            });
            request.execute(function(resp) {
                console.log(resp);
            });
            return apiresponse.promise;
        }
    }
}]);