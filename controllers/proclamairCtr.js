const bcrypt = require('bcrypt')
const Proclamiar = require('../modals/proclamair')

exports.createproclamair = (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then(hash => {
      const {
        userName,
        numberOfCongreg,
        name,
        lastName,
        sex,
        phoneNumber,
        birthYear,
        baptismalYear,
        picture,
      } = request.body
      const proclamair = new Proclamiar({
        userName,
        password: hash,
        numberOfCongreg,
        name,
        lastName,
        sex,
        phoneNumber,
        birthYear,
        baptismalYear,
        picture,
      })
      proclamair
        .save()
        .then(data => {
          response.status(200).json(data)
        })
        .catch(err => {
          throw err
        })
    })
    .catch(err => console.log(err))
}

exports.getAllproclamair = (request, response) => {
  Proclamiar.find()
    .then(proclamair => {
      response.status(200).json(proclamair)
    })
    .catch(err => {
      throw err
    })
}
exports.deleteProclamair = (request, response) => {
  Proclamiar.deleteOne({ _id: request.params.id })
    .then(proclamair => {
      response.status(200).json(`proclamair deleted`)
    })
    .catch(err => {
      throw err
    })
}
