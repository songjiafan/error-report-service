const express = require('express')
const report = require('../src/controller/report')
const router = express.Router()

router.get('/errorReport', function(req, res, next) {
  report.errorReport(req, res, next)
})

router.get('/performanceReport', function(req, res, next) {
  report.performanceReport(req, res, next)
})

module.exports = router
