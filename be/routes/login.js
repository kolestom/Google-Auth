const express = require('express')
const router = express.Router()
const jwt_decode = require("jwt-decode")
const User = require('../models/UserSchema')
 

router.post('/', async (req,res) =>{
    const decoded = jwt_decode(req.body.credential);
    const [user] = await User.find({email: decoded.email})
    if (user) return res.send(user)
    const createUser = await User.create(decoded)
    console.log(createUser);
    res.send(decoded)
})

module.exports = router