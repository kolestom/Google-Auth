const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    family_name: String,
    given_name: String,
    name: String,
    picture: String,
    sub: String

})

module.exports = mongoose.model('User', userSchema)