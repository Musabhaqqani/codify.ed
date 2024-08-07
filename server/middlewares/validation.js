const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require("../routes/config")

const validateToken = (req, res, next) => {
    try {
        let token = req.headers["authorization"]
        if (token) {
            token = token.split(" ")[1]
            const decode = jwt.verify(token, JWT_SECRET);
            req.user = decode
        }
        else {
            return res.status(401).send({ msg: "Authorization required" })
        }
        return next()
    }
    catch (err) {
        res.status(401).send("Invalid Token")
        console.log(err)
    }
}
module.exports = validateToken