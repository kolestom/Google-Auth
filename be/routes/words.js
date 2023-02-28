const express  = require("express");
const router = express.Router()
const Word = require('../models/WordSchema')

router.get('/public', async (req, res) => {
    res.send(await Word.find({content: 'public'}))
})

router.get('/private', async (req, res) => {
    res.send(await Word.find({content: 'private'}))
})

module.exports = router