const Admin = require('../modals/admin')
const bcrypt = require('bcrypt')

exports.findAllAdmin = (request, response) => {
  Admin.find()
    .then(admin => {
      response.status(200).json(admin)
    })
    .catch(err => {
      throw err
    })
}
exports.createAdmin = (request, response) => {
  const { userName, password, numberOfCongregationId } = request.body
  const hash = bcrypt.hashSync(password, 10)
  const admin = new Admin({
    userName,
    password: hash,
    numberOfCongregationId,
  })
  admin
    .save()
    .then(adm => {
      response.status(200).json(adm)
    })
    .catch(err => {
      throw err
    })
}
exports.deleteOneAdmin = (request, response) => {
  Admin.deleteOne({ _id: request.params.id })
    .then(() => {
      response.status(200).json(`admin succesfully deleted`)
    })
    .catch(err => {
      throw err
    })
}
exports.modifyOneAdmin = (request, response) => {
  Admin.updateOne({ _id: request.params.id }, { ...request.body, _id: request.params.id })
    .then(() => {
      response.status(200).json(`admin succesfully updated`)
    })
    .catch(err => {
      throw err
    })
}
