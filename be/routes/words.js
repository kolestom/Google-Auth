const express  = require("express");
const router = express.Router()
const Word = require('../models/WordSchema')
const jwt = require('jsonwebtoken')
const authMW = require('../middleware/authMW')

router.get('/public', async (req, res) => {
    res.send(await Word.find({content: 'public'}))
})

router.get('/private', authMW, async (req, res) => {
    res.send(await Word.find({content: 'private'}))
})

module.exports = router