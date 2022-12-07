const express = require('express')
const app = express()
const cors = require('cors')
const congregRoutes = require('./routes/congregation')
const groupRoutes = require('./routes/group')

app.use(cors())

app.use(express.json())

app.use('/api/congregation', congregRoutes)
app.use('/api/group', groupRoutes)

module.exports = app
