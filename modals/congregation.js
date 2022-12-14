const mongoose = require('mongoose')

const congregationSchema = mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    coordinator: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Congregation', congregationSchema)
