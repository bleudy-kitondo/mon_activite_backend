const express = require('express')
const router = express.Router()
const congregCtr = require('../controllers/congregationCtr')

router.get('/create/:number', congregCtr.findOrCreateCongregation)
router.get('/find', congregCtr.getCongregation)
router.delete('/delete/:id', congregCtr.deleteCongregation)
router.put('/update/:id', congregCtr.updateCongregation)

module.exports = router
