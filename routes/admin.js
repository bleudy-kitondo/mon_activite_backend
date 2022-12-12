const express = require('express')
const router = express.Router()
const adminCtr = require('../controllers/adminCtr')
router.post('/create', adminCtr.createAdmin)
router.get('/find', adminCtr.findAllAdmin)
router.delete('/delete/:id', adminCtr.deleteOneAdmin)

module.exports = router
