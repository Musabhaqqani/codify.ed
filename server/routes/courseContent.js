const express = require("express");
const router = express.Router();
const Question = require('../collections/questions');
const Subjects = require("../collections/subjects")

router.post('/subject-details', async (req, res) => {
  try {
    const findSubject = await Subjects.findOne({ subject: req.body.subject });
    if (findSubject) {
      return res.json({ mssg: "Subject already exists" });
    }
    const subject = new Subjects(req.body);
    await subject.save();
    res.json({ mssg: "Subject added" });
  } catch (err) {
    res.status(500).json({ mssg: "Internal server error" });
  }
});

router.get("/subject-details", async (req, res) => {
  try {
    const subjectsList = await Subjects.find({})
    let subjects = []
      subjectsList.forEach(sub => {
        subjects.push(sub.subject)
      });
    res.json(subjects)
  }
  catch (err) {
    res.json("internal server error")
  }
});

router.post('/questions', async (req, res) => {
  try {
    const { subject, week, questionTitle, questionDescription, testCases } = req.body;

    // Check if a question with the same title already exists
    const existingQuestion = await Question.findOne({ questionTitle });
    if (existingQuestion) {
      return res.status(409).json({ message: 'Question with this title already exists' });
    }

    const newQuestion = new Question({ subject, week, questionTitle, questionDescription, testCases });
    await newQuestion.save();

    res.status(201).json({ message: 'Question stored successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error storing question' });
  }
});
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving questions' });
  }

});

// router.get("/subjects", async (req, res) => {
//   const questions = await Question.find({})
//   let subjects = []
//   questions.forEach(question => {
//     subjects.push(question.subject)
//   });
//   res.json(subjects)
// })
module.exports = router;