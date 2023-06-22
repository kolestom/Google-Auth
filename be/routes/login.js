const express  = require("express");
const router = express.Router()
const axios = require('axios')
const jwt_decode = require("jwt-decode")
const User = require('../models/UserSchema')
const jwt = require('jsonwebtoken')
 

router.post('/', async (req,res) =>{
    try {
        const resp = await axios.post("https://oauth2.googleapis.com/token", {
            code: req.body.code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "authorization_code",
            redirect_uri: "http://localhost:5173/callback"
        }
        )
        // console.log(resp.data);
        const decoded = jwt_decode(resp.data.id_token);
        // console.log(decoded);
        const [user] = await User.find({sub: decoded.sub})
        if (user) {
            const updated = await User.findOneAndUpdate({sub: decoded.sub}, {decoded})
            console.log(updated);
            const token = jwt.sign({user:updated}, process.env.SECRET_KEY, {expiresIn: '10s'})
            return res.send({token, name: updated.name})
        }
        const createUser = await User.create(decoded)
        const token = jwt.sign({user:createUser}, process.env.SECRET_KEY, {expiresIn: '10s'})
        res.send({token, name: createUser.name})
        
    } catch (e) {
        console.log(e.message);
    }
})

module.exports = router