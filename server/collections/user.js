const mongoose = require("mongoose")

const url = 'mongodb+srv://musabhaqqani:iUwJGslvNFSNjBOm@cluster0.onkpicf.mongodb.net/CodifyEd'

mongoose.connect(url).then(()=> console.log("Mongoose Connected."))

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    rollnumber : {
        type : String,
        required : true
    },
    mail : {
        type :String,
        required :true
    },
    password : {
        type : String,
        required : true
    },
    usertype : {
        type : String,
        required : false
    }
})
const User = mongoose.model("User",UserSchema)
module.exports = {User}