const mongoose = require('mongoose')

const reportSchema = mongoose.Schema(
  {
    proclamairId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Proclamair',
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    publication: {
      type: Number,
      default: 0,
    },
    video: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      required: true,
    },
    visit: {
      type: Number,
      default: 0,
    },
    course: {
      type: Number,
      default: 0,
    },
    note: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Report', reportSchema)
