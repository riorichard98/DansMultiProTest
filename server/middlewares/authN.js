const { readToken } = require("../helpers/jwt.js");
const {User} = require('../models/index.js')

//authentication before hitting non-public api
 
const authN = async (req,res,next)=>{
    try {
        if(!req.headers.token){
            throw({
                type:"known",
                code:401,
                message:"Authentication error"
            })
        }
        const {token} = req.headers
        const payload = readToken(token) 
        const user = await User.findByPk(payload.id)
        if(!user){
            throw({
                type:"known",
                code:401,
                message:"Authentication error"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {authN}