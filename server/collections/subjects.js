const mongoose = require("mongoose")

const url = 'your mongoDB URI'

mongoose.connect(url).then(()=> console.log("Subject schema connected.."))

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Subjects', subjectSchema);
