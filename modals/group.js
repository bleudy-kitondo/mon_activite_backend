const mongoose = require('mongoose')
const groupSchema = mongoose.Schema({
  manager: {
    type: String,
    required: true,
  },
  assistant: {
    type: String,
  },
  meeting_place: {
    type: String,
  },
  meeting_day: {
    type: String,
  },
})

module.exports = mongoose.Model('Groupe', groupSchema)