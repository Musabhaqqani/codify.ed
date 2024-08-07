const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const router = express.Router();
const { JWT_SECRET } = require("./config");
const { User } = require('../collections/user');

router.post("/signup", async (req, res) => {
    try {
        const findUser = await User.findOne({ rollnumber: req.body.rollnumber });
        if (findUser) {
            return res.status(400).json({mssg : "User already exists"});
        }
        const user = new User(req.body)
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(req.body.password, salt)
        let result = await user.save()
        result = result.toObject()
        delete result.password
        const token = jwt.sign({ userId: result._id }, JWT_SECRET);
        res.json({ mssg: "User created", token: token });
    } catch (error) {
        console.error("Error signing up user:", error);
        res.status(500).send("Server error");
    }
});

router.post("/", async (req, res) => {
    try {
        if (req.body.rollnumber && req.body.password) {
            const user = await User.findOne({ rollnumber: req.body.rollnumber })
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password)
                if (passwordMatch) {
                    const payload = {
                        username : user.username,
                        mail : user.mail 
                    }

                    jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" }, (err, token) => {
                        if (err) {
                            res.status(400).send({ result: "Something went wrong." })
                        }
                        let data = user
                        data = data.toObject()
                        delete data.password
                        delete data.__v
                        delete data._id
                        res.status(200).send({ token: token, result: "Login success.", data: data })
                    })
                }
                else {
                    res.status(400).send({ result: "Incorrect password." })
                }
            }

            else {
                res.status(404).send({ result: "User not found." })
            }

        }

        else {
            res.status(400).send({ result: "Please provide both rollnumber and password." })
        }
    }

    catch (error) {
        res.status(500).send({ result: "Internal server error." })
    }
})

module.exports = router;
