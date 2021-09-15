const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema({
    name: {
        type : String,
        required: [true, "Name must be provided"]
    },
    age : {
        type : Number,
        required: [true, "Age is required"],
        min : [0, "Age cannot be negative"]
    },
    born : {
        type : String,
        required : [true, "Location of birth must be provided"]
    }
}, {timestamps:true})
module.exports.Author = mongoose.model('Author', AuthorSchema);