const bcrypt = require('bcrypt')
const Proclamiar = require('../modals/proclamair')
const jwt = require('jwt-simple')
require('dotenv').config()

exports.createproclamair = (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then(hash => {
      const {
        userName,
        numberOfCongreg,
        name,
        lastName,
        status,
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
        status,
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
    .then(() => {
      response.status(200).json(`proclamair deleted`)
    })
    .catch(err => {
      throw err
    })
}
exports.updateProclamair = (request, response) => {
  Proclamiar.updateOne(
    { _id: request.params.id },
    { ...request.body, _id: request.params.id },
  )
    .then(() => {
      response.status(200).json(`proclamair updated`)
    })
    .catch(err => {
      throw err
    })
}
exports.singinproclamair = (request, response) => {
  Proclamiar.findOne({ userName: request.body.userName })
    .then(proclamair => {
      if (!proclamair) {
        response.status(400).json(`nom d'utilisateur  incorrect`)
      } else {
        const jwt_payload = {
          id: proclamair._id,
          userName: proclamair.userName,
          numberOfCongreg: proclamair.numberOfCongreg,
          name: proclamair.name,
          lastName: proclamair.lastName,
          status: proclamair.status,
          sex: proclamair.sex,
          phoneNumber: proclamair.phoneNumber,
          birthYear: proclamair.birthYear,
          baptismalYear: proclamair.baptismalYear,
          picture: proclamair.picture,
          expire: 24 * 60 * 60 * 1000,
        }
        const token = jwt.encode(jwt_payload, process.env.password)
        bcrypt
          .compare(request.body.password, proclamair.password)
          .then(valid => {
            if (!valid) {
              response.status(400).json(`mot de passe incorrect`)
            } else {
              delete proclamair.password
              response.status(200).json({
                token: `bearer ${token}`,
                id: proclamair._id,
                userName: proclamair.userName,
                numberOfCongreg: proclamair.numberOfCongreg,
                name: proclamair.name,
                lastName: proclamair.lastName,
                status: proclamair.status,
                sex: proclamair.sex,
                phoneNumber: proclamair.phoneNumber,
                birthYear: proclamair.birthYear,
                baptismalYear: proclamair.baptismalYear,
                picture: proclamair.picture,
              })
            }
          })
          .catch(err => {
            throw err
          })
      }
    })
    .catch(err => {
      throw err
    })
}
