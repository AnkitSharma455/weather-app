const getWeather = require('./getWeather')

if(address){
    getWeather(address,(error,{location,temp,condition}) => {
        if(error)
            return console.log(error)
        console.log("Location : ",location )
        console.log("Temperature : ",temp)
        console.log("Condition : ",condition)
    })
}
else {
    console.log('Please enter location')
}
