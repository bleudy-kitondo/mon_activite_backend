const Report = require('../modals/report')

exports.sendOrFindRapport = async (request, response) => {
  await Report.findOne({
    $and: [
      { year: { $eq: request.body.year } },
      { month: { $eq: request.body.month } },
      { proclamairId: { $eq: request.body.proclamairId } },
    ],
  })
    .then(report => {
      if (!report) {
        const {
          proclamairId,
          month,
          year,
          publication,
          video,
          time,
          visit,
          course,
          note,
        } = request.body
        const newrapport = new Report({
          proclamairId,
          month,
          year,
          publication,
          video,
          time,
          visit,
          course,
          note,
        })
        newrapport
          .save()
          .then(data => {
            response.status(200).json(`${data} created`)
          })
          .catch(err => {
            throw err
          })
      } else {
        response.status(200).json(`${report} exist`)
      }
    })
    .catch(err => {
      throw err
    })
}

exports.getByProclamair = (request, response) => {
  Report.find({ proclamairId: request.params.proclamairId })
    .then(report => {
      response.status(200).json(report)
    })
    .catch(err => {
      throw err
    })
}

exports.getByYear = (request, response) => {
  Report.find({ year: request.params.year })
    .then(report => {
      response.status(200).json(report)
    })
    .catch(err => {
      throw err
    })
}

exports.getByYearAndMonth = (request, response) => {
  Report.find({
    $and: [
      { year: { $eq: request.params.year } },
      { month: { $eq: request.params.month } },
    ],
  })
    .then(report => {
      response.status(200).json(report)
    })
    .catch(err => {
      throw err
    })
}

exports.deleteOneRapport = (request, response) => {
  Report.deleteOne({ _id: request.params.id })
    .then(() => {
      response.status(200).json(`deleted`)
    })
    .catch(err => {
      throw err
    })
}
