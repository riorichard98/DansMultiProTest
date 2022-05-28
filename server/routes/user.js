const express = require('express')
const UserController = require('../controllers/userController.js')
const router = express.Router()

router.post('/login',UserController.loginHandler)


module.exports = router