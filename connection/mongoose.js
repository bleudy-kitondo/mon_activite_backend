const mongoose = require('mongoose')
require('dotenv').config()

exports.db_connect = mongoose
  .connect(
    `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.mzmodyv.mongodb.net/${process.env.db}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => console.log('Connected in database ', process.env.db))
  .catch(() => console.log('Not connected in database!'))
