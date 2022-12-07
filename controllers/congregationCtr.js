const Congregation = require('../modals/congregation')

exports.addCongregation = (request, response) => {
  const { number, coordinator } = request.body
  const congreg = new Congregation({
    number,
    coordinator,
  })
  congreg
    .save()
    .then(data => {
      response.status(201).json(`${data} is successfully created`)
    })
    .catch(err => console.log(err))
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
