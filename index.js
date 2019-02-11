
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const carRout = require('./route/routeCar')
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello app')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', carRout)

mongoose.connect('mongodb://localhost:27017/restful', (err) => {
    if(err) return next(err)
    console.log('Connect Database succesfully!')
})

app.listen(port, () => {
    console.log('Server is running on port:' + port)
})