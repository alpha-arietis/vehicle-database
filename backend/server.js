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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontEndBuild'));
    // Fall back to index.html all above app.use dont[ match]
    app.get('*', (req, res) => res.sendFile(`${__dirname}/frontEndBuild/index.html`))
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`) // tells server to listen on a certain port
})