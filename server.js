const http = require('http')
const app = require('./server_express')
require('dotenv').config()
require('./connection/mongoose')
const port = process.env.port
const server = http.createServer(app)

server.listen(port, () => {
  console.log('server started in port: ', port)
})
