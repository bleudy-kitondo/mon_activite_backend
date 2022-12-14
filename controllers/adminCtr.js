const Admin = require('../modals/admin')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
require('dotenv').config()

exports.findByCongregationId = (request, response) => {
  Admin.find({ numberOfCongregationId: request.params.numberOfCongregationId })
    .then(admin => {
      response.status(200).json(admin)
    })
    .catch(err => {
      throw err
    })
}

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

exports.signInAdmin = (request, response) => {
  Admin.findOne({ userName: request.body.userName }).then(admin => {
    if (!admin) {
      response.status(401).json(`nom d'utilisateur ou mot de passe incorrect`)
    } else {
      const jwt_payload = {
        id: admin._id,
        nom: admin.userName,
        picture: admin.picture,
      }
      const token = jwt.encode(jwt_payload, process.env.password)
      bcrypt
        .compare(request.body.password, admin.password)
        .then(valid => {
          if (!valid) {
            response.status(400).json(`mot de passe incorrect`)
          } else {
            delete admin.password
            response.status(200).json({
              adminId: admin._id,
              token: `Bearer ${token}`,
              userName: admin.userName,
              picture: admin.picture,
            })
          }
        })
        .catch(err => {
          throw err
        })
    }
  })
}
