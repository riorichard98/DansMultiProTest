const { comparePassword } = require('../helpers/bcrypt.js')
const { makeToken } = require('../helpers/jwt.js')
const{User} = require('../models/index.js')

class UserController{
    static async loginHandler(req,res,next){
        try {
            // jika server di hit tetapi tidak mengirim req.body akan dihandle dibawah ini
            if(!req.body.username || !req.body.password){
                throw ({
                    type:"known",
                    code:400,
                    message:"Username or password is required"
                })
            }
            const username = req.body.username
            const password = req.body.password
            const user = await User.findOne({where:{username}})
            // conditional jika user dengan username tsb tidak ada 
            if(!user){
                throw ({
                    type:"known",
                    code:401,
                    message:"Invalid password or username"
                })
            }
            // conditional jika password yang di masukan tidak sesuai dengan database
            if(!comparePassword(password,user.password)){
                throw ({
                    type:"known",
                    code:401,
                    message:"Invalid password or username"
                })
            }
            // proses merespon token jsonwebtoken
            const payLoad = {id:user.id}
            const token = makeToken(payLoad)
            res.status(200).json({token})
        } catch (error) {
            // error yang di-catch akan dihandle oleh middleware errorhandler
            next(error)
        }
    }
}

module.exports = UserController