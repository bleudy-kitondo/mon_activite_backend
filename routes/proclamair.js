const express = require('express')
const router = express.Router()
const proclamairCtr = require('../controllers/proclamairCtr')

router.get('/create', proclamairCtr.createOrFindProclamair)
router.get('/find/:numberOfCongreg', proclamairCtr.getAllproclamair)
router.get('/group/:groupId', proclamairCtr.getByGroupId)
router.get('/status/:status', proclamairCtr.getByStatus)
router.delete('/delete/:id', proclamairCtr.deleteProclamair)
router.put('/update/:id', proclamairCtr.updateProclamair)
router.post('/singin', proclamairCtr.singinproclamair)

module.exports = router
