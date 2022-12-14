const express = require('express')
const router = express.Router()
const rapportCtr = require('../controllers/rapportCtr')

router.get('/create', rapportCtr.sendOrFindRapport)
router.get('/proclamair/:proclamairId', rapportCtr.getByProclamair)
router.get('/year/:year', rapportCtr.getByYear)
router.get('/yearandmonth/:year/:month', rapportCtr.getByYearAndMonth)
router.delete('/delete/:id', rapportCtr.deleteOneRapport)

module.exports = router
