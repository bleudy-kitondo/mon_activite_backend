const express = require('express')
const router = express.Router()
const groupCtr = require('../controllers/groupeCtr')

router.get('/create/:congregationId/:number', groupCtr.createOrFind)
router.get('/find', groupCtr.getgroup)
router.delete('/delete/:id', groupCtr.deleteGroup)
router.put('/update/:id', groupCtr.updateGroup)
router.get('/search/:congregationId', groupCtr.getBycongregationId)

module.exports = router
