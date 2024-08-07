const express = require("express");
const router = express.Router();
const Question = require('../collections/questions');
const Subjects = require("../collections/subjects")
const validateToken = require('../middlewares/validation');
const app = express();
app.use(validateToken);


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
    const { subject, week, questionTitle, questionDescription,language, testCases,codeSnippet } = req.body;

    // Check if a question with the same title already exists
    const existingQuestion = await Question.findOne({ questionTitle });
    if (existingQuestion) {
      return res.status(409).json({ message: 'Question with this title already exists' });
    }

    const newQuestion = new Question({ subject, week, questionTitle, questionDescription,language, testCases,codeSnippet });
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

function removeDuplicates(array) {
  return [...new Set(array)];
}

router.get("/subject-weeks", async (req, res) => {
  const questions = await Question.find({subject : req.query.subject})
  let weeks = []
  questions.forEach(question => {
    weeks.push(question.week)
  });
  weeks = removeDuplicates(weeks)
  res.json(weeks.sort())
})

router.get("/subject-week-details", async (req, res) => {
  const questions = await Question.find({subject : req.query.subject, week : req.query.week})
  res.json(questions)
})

router.get("/week-question-details", async (req, res) => {
  const questions = await Question.findOne({subject : req.query.subject, week : req.query.week, questionTitle:req.query.questionTitle})
  res.json(questions)
})

module.exports = router;