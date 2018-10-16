const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/dialapp-database', { 
    useNewUrlParser: true,
    useCreateIndex: true  })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error)

// Settings
app.set('port', process.env.PORT || 3001)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/sesiones', require('../src/routes/sesiones'))
app.use('/api/pacientes', require('../src/routes/pacientes'))

// static files
app.use(express.static(__dirname + '/public'))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})