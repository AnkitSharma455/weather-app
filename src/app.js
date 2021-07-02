const path = require('path')
const express = require('express')
const hbs = require('hbs')
const getWeather = require('./utils/getWeather')

const app = express()
const port = process.env.PORT || 3000

const dir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(dir))
app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Me'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About',
        name: 'Me'
    })
})

app.get('/help',(req,res)=> {
    res.render('help',{
        title:'Help',
        name: 'Me'
    })
})

app.get('/weather',(req,res)=>{
    address = req.query.location
    if(!req.query.location){
        return res.send({
            error: 'You must search for a location!!'
        })
    }
    getWeather(address,(error,data) => {
        if(error)
            return res.send({error: error})
        res.send({
            Location: data.location,
            Temperature: data.temp,
            Condition: data.condition
        })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        name: 'me',
        msg: 'Help data not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        name: 'me',
        msg: 'Page not found'
    })
})



app.listen(port,()=>{
    console.log('Server is running at '+port)
})