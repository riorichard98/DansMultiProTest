const express = require('express')
const router = express.Router()
const { authN } = require('../middlewares/authN.js')
const userRoute = require('./user.js')
const jobRoute = require('./job.js')

router.use('/users',userRoute)

router.use(authN) //JWT authorization ada di middleware ini

router.use('/jobs',jobRoute)

module.exports = router