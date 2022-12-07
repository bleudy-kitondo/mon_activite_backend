const mongoose = require('mongoose')

const rapportSchema = mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  publication: {
    type: String,
  },
  video: {
    type: String,
  },
  time: {
    type: String,
    required:true
  },
  visit: {
    type: String,
  },
  course: {
    type: String,
  },
  note: {
    type: String,
  },
})

module.exports = mongoose.model('Rapport', rapportSchema)
