const mongoose = require('mongoose')

try {
    await mongoose.connect('mongodb://localhost:27017')
} catch (error) {
    console.error("Something went wrong: "+ error.message)
}

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema)