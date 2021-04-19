'use strict';
const request = require('request');
function getJoke() {
    const options = {
    url: 'https://www.icanhazdadjoke.com/',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }};

    request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json['joke']);
}); 
}


function about() {
    console.log(
    "DaddyJoke allows you to get a random joke instantly via JS\nAuthor Name - Eklavya Chandra\nVersion - 1.0.0"
    );
}

module.exports = {
    getJoke,
    about
}