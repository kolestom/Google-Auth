const express  = require("express");
const router = express.Router()
const axios = require('axios')
const jwt_decode = require("jwt-decode")

router.post('/', async(req, res) =>{
    try {

        const resp = await axios.post("https://oauth2.googleapis.com/token", {
            code: req.body.code,
            client_id: "",
            client_secret: "",
            grant_type: "authorization_code",
            redirect_uri: "http://localhost:5173/callback"
        }
        // {
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        // }
        )
        const decode = jwt_decode(resp.data.id_token);
        // console.log(resp);
        res.json(decode);
    } catch (e) {
        console.log(e.message);
    }
    
})

module.exports = router