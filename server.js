const http = require('http')
const app = require('./express')
require('dotenv').config()
require('./connection/mongoose')
http.createServer(app).listen(process.env.port, () => {
  console.log('server started in port: ', process.env.port)
})
