const http = require('http')
const app = require('./express')
require('dotenv').config()
const port = process.env.port
http.createServer(app).listen(port, () => {
  console.log('server started in port: ', port)
})
