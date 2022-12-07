const mongoose = require('mongoose')

const congregationSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  coordinator: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Congregations', congregationSchema)
