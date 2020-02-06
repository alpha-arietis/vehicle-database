const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// *** SET UP SERVER ***
require('dotenv').config()


const app = express()
const port = process.env.PORT || 5000



app.use(cors()) // cors middleware
app.use(express.json()) // allows us to use JSON


// *** CONNECT TO MONGODB ***

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Connection to MongoDB established successfully')
})

// *** REQUIRE ROUTE FILES AND USE THEM ***
const vehiclesRouter = require('./routes/vehicles')
app.use('/vehicles', vehiclesRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`) // tells server to listen on a certain port
})

//new stuff from tutorial on how to connect backend and frontend
//start
const path = require('path')
app.use(express.static(path.join(__dirname, '../build'))) // static file declaration
if (process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.join(__dirname, '../build'))) 
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = '../build/index.html'));  
    }) // production mode = when app is deployed on Heroku
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../public/index.html'))
}) // build mode
//end