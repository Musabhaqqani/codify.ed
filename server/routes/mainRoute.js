const express = require("express");
const userRouter = require("./userAuth");
const studentRouter = require("./studentCode");
const router = express.Router();

router.use("/user", userRouter);
router.use("/user", studentRouter);
module.exports = router;
