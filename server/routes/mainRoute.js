const express = require("express");
const userRouter = require("./userAuth");
const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
