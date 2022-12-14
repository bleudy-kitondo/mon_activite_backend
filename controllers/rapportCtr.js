const Rapport = require('../modals/rapport')

exports.sendOrFindRapport = async (request, response) => {
  await Rapport.findOne({
    $and: [
      { year: { $eq: request.params.year } },
      { month: { $eq: request.params.month } },
    ],
  })
    .then(rapport => {
      if (!rapport) {
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
        const newrapport = new Rapport({
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
        response.status(200).json(`${rapport} exist`)
      }
    })
    .catch(err => {
      throw err
    })
}

exports.getAllRapport = (request, response) => {
  Rapport.find()
    .then(rapport => {
      response.status(200).json(rapport)
    })
    .catch(err => {
      throw err
    })
}

exports.deleteOneRapport = (request, response) => {
  Rapport.deleteOne({ _id: request.params.id })
    .then(() => {
      response.status(200).json(`deleted`)
    })
    .catch(err => {
      throw err
    })
}
