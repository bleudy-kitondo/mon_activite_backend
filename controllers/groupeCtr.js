const Group = require('../modals/group')

exports.createOrFind = (request, response) => {
  Group.findOne({
    $and: [
      { congregationId: { $eq: request.body.congregationId } },
      { number: { $eq: request.body.number } },
    ],
  }).then(data => {
    if (!data) {
      const { congregationId, manager, assistant, meeting_place, meeting_day, number } =
        request.body
      const group = new Group({
        congregationId,
        manager,
        assistant,
        meeting_place,
        meeting_day,
        number,
      })
      group
        .save()
        .then(group => {
          response.status(200).json({ message: 'succesfully created', data: group })
        })
        .catch(err => {
          throw err
        })
    } else {
      response.status(200).json({ message: 'found', data })
    }
  })
}

exports.getgroup = (request, response) => {
  Group.find()
    .then(data => {
      response.status(200).json(data)
    })
    .catch(err => console.log(err))
}

exports.getBycongregationId = (request, response) => {
  Group.find({ congregationId: request.params.congregationId })
    .then(group => {
      response.status(200).json(group)
    })
    .catch(err => console.log('err:', err))
}

exports.deleteGroup = (request, response) => {
  Group.deleteOne({ _id: request.params.id })
    .then(() => {
      response.status(200).json(`group deleted`)
    })
    .catch(err => console.log(err))
}

exports.updateGroup = (request, response) => {
  Group.updateOne({ _id: request.params.id }, { ...request.body, _id: request.params.id })
    .then(() => {
      response.status(200).json(`group updated`)
    })
    .catch(err => console.log(err))
}
