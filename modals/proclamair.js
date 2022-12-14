const mongoose = require('mongoose')

const proclamairSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    unique: true,
  },
  numberOfCongreg: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    max: 20,
  },

  picture: {
    type: String,
    required: true,
    max: 20,
  },
  sex: {
    type: String,
    required: true,
    max: 1,
  },
  phoneNumber: {
    type: Number,
  },
  birthYear: {
    type: String,
    required: true,
    max: 20,
  },
  baptismalYear: {
    type: String,
    max: 20,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  },
  status: {
    type: String,
    default: 'proclamateur',
  },
})

module.exports = mongoose.model('Proclamair', proclamairSchema)
