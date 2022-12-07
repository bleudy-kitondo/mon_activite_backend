const express = require('express')
const router = express.Router()
const proclamairCtr = require('../controllers/proclamairCtr')

router.post('/create', proclamairCtr.createproclamair)
router.get('/get', proclamairCtr.getAllproclamair)
router.delete('/delete/:id', proclamairCtr.deleteProclamair)

module.exports = router
