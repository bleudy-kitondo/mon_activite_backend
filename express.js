const express = require('express')
const app = express()
const cors = require('cors')
const congregRoutes = require('./routes/congregation')
const groupRoutes = require('./routes/group')
const proclamairRoutes = require('./routes/proclamair')

app.use(cors())

app.use(express.json())

app.use('/api/congregation', congregRoutes)
app.use('/api/group', groupRoutes)
app.use('/api/proclamair', proclamairRoutes)

module.exports = app
