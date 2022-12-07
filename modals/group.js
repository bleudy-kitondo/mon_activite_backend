const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')
const groupSchema = mongoose.Schema({
  congregationId: {
    type: mongoose.Schema.Types.ObjectId,
    Ref: 'Congregation',
    required: true,
  },
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
  number: {
    type: Number,
    required: true,
    unique: true,
  },
})
groupSchema.plugin(validator)
module.exports = mongoose.model('Group', groupSchema)
