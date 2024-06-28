const mongoose = require("mongoose")

const url = 'your mongoDB URI'

mongoose.connect(url).then(()=> console.log("Student schema connected.."))

const studentSchema = new mongoose.Schema({
  rollNumber: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
