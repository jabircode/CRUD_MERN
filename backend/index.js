let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParse = require('body-parser')
require('dotenv').config()

//EXPRESS route
const studentRoute = require('../backend/routes/student.routes')
const bodyParser = require('body-parser')

//connecting mongoDB Database
const mySecret = process.env.MONGO_URI
mongoose.connect(mySecret, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => {
        console.log(`Connected to Mongo! Database name: "${res.connections[0].name}"`)
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', err.reason)
    })

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use('/students', studentRoute)

//PORT
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})

// error 404
// app.use((request, respond, next) => {
//     next(createError(404))
// })
// app.use(function(error, request, respond, next) {
//     console.error(error.message)
//     if(!error.statusCode) error.statusCode = 500
//     respond.status(error.statusCode).send(error.message)
// })