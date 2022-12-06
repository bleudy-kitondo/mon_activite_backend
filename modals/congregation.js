const mongoose = require('mongoose')

const congregation = mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  coordinator: {
    type: String,
    resuired: true,
  },
})

module.exports = mongoose.model('Congregation', congregation)
