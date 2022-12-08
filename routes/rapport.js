const express = require('express')
const router = express.Router()
const rapportCtr = require('../controllers/rapportCtr')

router.get('/create/:year/:month', rapportCtr.sendOrFindRapport)
router.get('/get', rapportCtr.getAllRapport)
router.delete('/delete/:id', rapportCtr.deleteOneRapport)

module.exports = router