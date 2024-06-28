const mongoose = require('mongoose');
const url = 'your mongoDB URI'

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
    unique: true 
  },
  questionDescription: {
    type: String,
    required: true
  },
  language : {
    type : String,
    required : true
  },
  testCases: {
    type: [[Number]], 
    required: true,
    validate: {
      validator: testCaseArray => testCaseArray.length > 0 && 
        testCaseArray.every(testCase => testCase.length >= 1), 
      message: 'testCases must be an array of arrays with at least one element (expected answer)'
    }
  },
  codeSnippet:{
    type:String,
    required:true
  }
});



module.exports =  mongoose.model('Question', QuestionSchema);
