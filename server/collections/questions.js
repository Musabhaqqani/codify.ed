const mongoose = require('mongoose');
const {Schema} = mongoose;
const {url,localhost} = require("../routes/config")

mongoose.connect(localhost).then(()=> console.log("Student schema connected"))

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
    type: [[Schema.Types.Mixed]], // Allow each element to be either a string or a number
    required: true,
    validate: {
      validator: function (testCaseArray) {
        return (
          testCaseArray.length > 0 &&
          testCaseArray.every(testCase => 
            testCase.length >= 1 && 
            testCase.every(item => typeof item === 'number' || typeof item === 'string')
          )
        );
      },
      message: 'testCases must be an array of arrays with at least one element, where each element is either a number or a string'
    }
  },
  codeSnippet:{
    type:String,
    required:true
  }
});



module.exports =  mongoose.model('Question', QuestionSchema);
