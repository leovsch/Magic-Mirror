const fetch = require('node-fetch');

const SCRIPT_URL = 'https://apis.google.com/js/api.js';

module.exports = function () {
    return fetch(SCRIPT_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Could not download ' + SCRIPT_URL);
        }
        return response.text();
    })
    .then((remoteScript) => ({ code: remoteScript }));
}