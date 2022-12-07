const express = require('express')
const app = express()
const cors = require('cors')
const congregRoutes = require('./routes/congregation')

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)
// app.use(cors())

app.use(express.json())

app.use('/api/congregation', congregRoutes)

module.exports = app
