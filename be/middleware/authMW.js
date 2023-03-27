const jwt = require('jsonwebtoken')

const authMW = (req, res, next) => {
    try {
        const decoded =jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
        // res.locals.sub = decoded.user.sub
        next ()

    } catch (err) {
        console.log(err.message);
        return res.sendStatus(403)

    }
}
 
module.exports = authMW;