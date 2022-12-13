const express = require('express')
const router = express.Router()
const proclamairCtr = require('../controllers/proclamairCtr')

router.post('/create', proclamairCtr.createproclamair)
router.get('/find', proclamairCtr.getAllproclamair)
router.delete('/delete/:id', proclamairCtr.deleteProclamair)
router.put('/update/:id', proclamairCtr.updateProclamair)
router.post('/singin', proclamairCtr.singinproclamair)

module.exports = router
