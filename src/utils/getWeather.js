const axios = require('axios');

const getWeather = (address,callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=d4d0aba12cc74fe8a4d90036212906&q='+encodeURIComponent(address)+'&aqi=no'
    axios.get(url)
        .then(response => {
            callback(undefined,{
                location:response.data.location.name,
                temp:response.data.current.temp_c,
                condition:response.data.current.condition.text
            })
        })
        .catch(error => {
            if(error.errno)
                callback('Not able to connect to the Server',undefined)
            else
                callback('Location not found',undefined)
        });
}

module.exports = getWeather