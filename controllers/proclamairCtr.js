const bcrypt = require('bcrypt'),
  Proclamiar = require('../modals/proclamair'),
  jwt = require('jwt-simple')
require('dotenv').config()

exports.createOrFindProclamair = async (request, response) => {
  await Proclamiar.findOne({
    $and: [
      { userName: { $eq: request.body.userName } },
      { numberOfCongreg: { $eq: request.body.numberOfCongreg } },
      { birthYear: { $eq: request.body.birthYear } },
    ],
  })
    .then(data => {
      if (!data) {
        const hash = bcrypt.hashSync(request.body.password, 10),
          {
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
            groupId,
          } = request.body,
          proclamair = new Proclamiar({
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
            groupId,
          })
        proclamair
          .save()
          .then(proclamair => {
            response.status(200).json({ message: 'proclamair creaded', proclamair })
          })
          .catch(err => console.log(err))
      } else {
        response.status(201).json({ message: 'proclamair found', data })
      }
    })
    .catch(err => console.log('err:', err))
}

exports.getAllproclamair = (request, response) => {
  Proclamiar.find({ numberOfCongreg: request.params.numberOfCongreg })
    .then(proclamair => {
      response.status(200).json(proclamair)
    })
    .catch(err => {
      throw err
    })
}

exports.getByGroupId = (request, response) => {
  Proclamiar.find({ groupId: request.params.groupId })
    .then(proclamair => {
      response.status(200).json(proclamair)
    })
    .catch(err => {
      throw err
    })
}

exports.getByStatus = (request, response) => {
  Proclamiar.find({ status: request.params.status })
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
