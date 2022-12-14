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
    },
    video: {
      type: Number,
    },
    time: {
      type: Number,
      required: true,
    },
    visit: {
      type: Number,
    },
    course: {
      type: Number,
    },
    note: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Report', reportSchema)
