const express = require("express");
const userRouter = require("./userAuth");
const studentRouter = require("./studentCode");
const questionRouter = require("./courseContent");
const router = express.Router();

router.use("/user", userRouter);
router.use("/user", studentRouter);
router.use("/user",questionRouter);
module.exports = router;
