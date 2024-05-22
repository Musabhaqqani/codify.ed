const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { JWT_SECRET } = require("./config");
const Question = require('../collections/questions');
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
      const { subject, week } = req.query;
  
      let query = {};
      if (subject) {
        query.subject = subject;
      }
      if (week) {
        query.week = week;
      }
  
      const questions = await Question.find(query);
      res.status(200).json(questions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving questions' });
    }
  });
  module.exports = router;