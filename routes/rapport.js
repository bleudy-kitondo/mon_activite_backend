const express = require('express')
const router = express.Router()
const rapportCtr = require('../controllers/rapportCtr')

router.get('/create', rapportCtr.sendOrFindRapport)
router.get('/find', rapportCtr.getAllRapport)
router.delete('/delete/:id', rapportCtr.deleteOneRapport)

module.exports = router
