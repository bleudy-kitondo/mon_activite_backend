const Group = require('../modals/group')

exports.createOrFind = (request, response) => {
  Group.findOne({ number: request.params.number }).then(data => {
    if (!data) {
      const {
        congregationId,
        manager,
        assistant,
        meeting_place,
        meeting_day,
        number,
      } = request.body
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
          response
            .status(200)
            .json({ message: 'succesfully created', data: group })
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
