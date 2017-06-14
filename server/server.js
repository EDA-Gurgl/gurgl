var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')


var clothing = require('./routes/clothing')


const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', clothing)

module.exports = server
