const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f869a99f845ed0f8b7de4260fb410a4c&query=New%20Delhi'

request({url: url, json: true}, (error, response) => {
    
    console.log(response.body.current);
})


