require('dotenv').config()
const jwt = require('jsonwebtoken')

const makeToken = (payload)=>{
    return jwt.sign(payload,process.env.secretKey) //secretKey = `secret` , create .env files format like .env.example
}

const readToken = (token)=>{
    return jwt.verify(token,process.env.secretKey) //secretKey = `secret`
}

module.exports = {
    makeToken,
    readToken
}