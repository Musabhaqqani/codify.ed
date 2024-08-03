const mongoose = require("mongoose")

const url = 'mongodb+srv://musabhaqqani:iUwJGslvNFSNjBOm@cluster0.onkpicf.mongodb.net/CodifyEd'

mongoose.connect(url).then(()=> console.log("Subject schema connected.."))

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Subjects', subjectSchema);
