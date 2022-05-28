const express = require('express')
const router = express.Router()
const { authN } = require('../middlewares/authN.js')
const userRoute = require('./user.js')

router.use('/users',userRoute)

router.use(authN)

module.exports = router