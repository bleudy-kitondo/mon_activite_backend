const express = require('express')
const router = express.Router()
const congregCtr = require('../controllers/congregationCtr')

router.post('/add', congregCtr.addCongregation)
router.get('/all', congregCtr.getCongregation)

module.exports = router
