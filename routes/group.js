const express = require('express')
const router = express.Router()
const groupCtr = require('../controllers/groupeCtr')

router.get('/create/:number', groupCtr.createOrFind)
router.get('/get', groupCtr.getgroup)

module.exports = router
