const express = require('express')
const { JobController } = require('../controllers/jobController')
const router = express.Router()

router.get('/',JobController.findAllJob)
router.get('/:id',JobController.findOneJob)

module.exports = router