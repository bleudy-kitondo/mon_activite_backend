const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')
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
    max: 6,
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
    max: 10,
  },
  birthYear: {
    type: String,
    max: 20,
  },
  baptismalYear: {
    type: String,
    max: 20,
  },
})
proclamairSchema.plugin(validator)

module.exports = mongoose.model('Proclamair', proclamairSchema)
