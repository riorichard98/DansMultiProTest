const express = require('express')
const UserController = require('../controllers/userController.js')
const { authN } = require('../middlewares/authN.js')
const router = express.Router()

router.post('/login',UserController.loginHandler)


module.exports = router