const express = require('express')
const router = express.Router()
const adminCtr = require('../controllers/adminCtr')
router.post('/create', adminCtr.createAdmin)
router.get('/search/:numberOfCongregationId', adminCtr.findByCongregationId)
router.delete('/delete/:id', adminCtr.deleteOneAdmin)
router.post('/singin', adminCtr.signInAdmin)
router.get('/find', adminCtr.findAllAdmin)

module.exports = router
