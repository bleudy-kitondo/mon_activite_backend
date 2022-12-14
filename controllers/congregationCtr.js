const Congregation = require('../modals/congregation')

exports.findOrCreateCongregation = (request, response) => {
  Congregation.findOne({ number: request.params.number })
    .then(congregation => {
      if (!congregation) {
        const { number, coordinator, name } = request.body
        const congreg = new Congregation({
          number,
          coordinator,
          name,
        })
        congreg
          .save()
          .then(data => {
            response.status(201).json(`${data} is successfully created`)
          })
          .catch(err => console.log(err))
      } else {
        response.status(201).json(`${congregation} is finding`)
      }
    })
    .catch(err => console.log(err))
}

exports.deleteCongregation = (request, response) => {
  Congregation.deleteOne({ _id: request.params.id })
    .then(() => response.status(200).json(`congregation deleted`))
    .catch(err => {
      throw err
    })
}

exports.getCongregation = (request, response) => {
  Congregation.find()
    .then(conversation => {
      response.status(200).json(conversation)
    })
    .catch(err => {
      throw err
    })
}

exports.updateCongregation = (request, response) => {
  Congregation.updateOne(
    { _id: request.params.id },
    { ...request.body, _id: request.params.id },
  )
    .then(() => response.status(200).json(`succesfully updated`))
    .catch(err => {
      throw err
    })
}
