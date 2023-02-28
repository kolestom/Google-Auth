const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    email_verified: Boolean,
    exp: Number,
    family_name: String,
    given_name: String,
    iat: Number,
    iss: String,
    jti: String,
    name: String,
    nbf: String,
    picture: String,
    sub: String

})

module.exports = mongoose.model('User', userSchema)

// aud: "422216780646-pgs3os1u4o3a0n6n7scp647v7bqibtrm.apps.googleusercontent.com";
// azp: "422216780646-pgs3os1u4o3a0n6n7scp647v7bqibtrm.apps.googleusercontent.com";
// email: "kolestom@gmail.com";
// email_verified: true;
// exp: 1677454491;
// family_name: "Tamás";
// given_name: "Köles";
// iat: 1677450891;
// iss: "https://accounts.google.com";
// jti: "3b3e6d9170b2283dea925e27fe95718b57ecff91";
// name: "Köles Tamás";
// nbf: 1677450591;
// picture: "https://lh3.googleusercontent.com/a/AGNmyxbXbuaBKVMMw070yVdqS8EfIdwQVvdw8Ey4FNn2PcI=s96-c";
// sub: "114960804292480584616";