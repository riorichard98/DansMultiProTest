const { comparePassword } = require('../helpers/bcrypt.js')
const { makeToken } = require('../helpers/jwt.js')
const{User} = require('../models/index.js')
require('dotenv').config()

class UserController{
    static async loginHandler(req,res,next){
        try {
            if(!req.body.username || !req.body.password){
                throw ({
                    type:"known",
                    code:400,
                    message:"Email or password is required"
                })
            }
        } catch (error) {
            
        }
    }
}

module.exports = UserController