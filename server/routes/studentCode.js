const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { JWT_SECRET } = require("./config");
const Student = require('../collections/students');
router.post('/students', async (req, res) => {

    try {
        const findUser = await Student.findOne({ rollnumber: req.body.rollnumber });
        if (findUser) {
            return res.status(400).json({ mssg: "User already exists" });
        }
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent); // Respond with created student data
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating student' });
    }
});
router.get('/students/code', async (req, res) => {
    try {
        const rollNumber = req.body.rollNumber;

        // Find student by roll number
        const student = await Student.findOne({ rollNumber });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ code: student.code }); // Respond with student's code
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving student code' });
    }
});
module.exports = router;