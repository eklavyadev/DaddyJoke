'use strict';
const request = require('request');
function getJoke() {
    const options = {
    url: 'https://karljoke.herokuapp.com/jokes/random',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }};

    request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json['setup'] + " " + json['punchline']);
}); 
}


function about() {
    console.log(
    "DaddyJoke allows you to get a random joke instantly via JS\nAuthor Name - Eklavya Chandra"
    );
}

module.exports = {
    getJoke,
    about
}