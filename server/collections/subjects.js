const mongoose = require("mongoose")
const {url,localhost} = require("../routes/config")

mongoose.connect(localhost).then(()=> console.log("Subject schema connected.."))

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Subjects', subjectSchema);
