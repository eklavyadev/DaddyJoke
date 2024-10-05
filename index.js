'use strict';
const axios = require('axios');

async function getJoke() {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/random', {
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
        });
        const joke = response.data;
        console.log(`${joke.setup} ${joke.punchline}`);
    } catch (error) {
        console.error("Error fetching joke: ", error.message || error);
    }
}

function about() {
    console.log(
        "DaddyJoke is a simple tool to fetch random jokes instantly using JavaScript.\nDeveloped by - Eklavya Chandra"
    );
}

module.exports = {
    getJoke,
    about
}
