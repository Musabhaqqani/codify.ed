const mongoose = require('mongoose');
const url = 'mongodb+srv://musabhaqqani:iUwJGslvNFSNjBOm@cluster0.onkpicf.mongodb.net/CodifyEd'

mongoose.connect(url).then(()=> console.log("Student schema connected"))

const QuestionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  week: {
    type: Number,
    required: true
  },
  questionTitle: {
    type: String,
    required: true,
    unique: true // Ensure unique titles (prevents duplicates)
  },
  questionDescription: {
    type: String,
    required: true
  },
  testCases: {
    type: [[String]], // Array of nested arrays (test case inputs and expected answer)
    required: true,
    validate: {
      validator: testCaseArray => testCaseArray.length > 0 && // Ensure at least one test case
        testCaseArray.every(testCase => testCase.length >= 1), // Each inner array has at least 1 element (expected answer)
      message: 'testCases must be an array of arrays with at least one element (expected answer)'
    }
  }
});



module.exports =  mongoose.model('Question', QuestionSchema);