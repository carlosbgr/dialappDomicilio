var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/dialapp.key', 'utf8');
var certificate = fs.readFileSync('sslcert/dialapp.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

//const app = express()
const app = express(credentials);

mongoose.connect('mongodb://10.192.138.97/dialapp-database', { 
    useNewUrlParser: true,
    useCreateIndex: true  })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error)

// Settings
//var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//httpServer.listen(3001);
var listener = httpsServer.listen(3001);

//app.set('port', port)

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
    console.log('Server on port ', listener.address().port)
})