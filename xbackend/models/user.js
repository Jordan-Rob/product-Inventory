const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type:String,
        min:4
    },

    email:{
        type:String,
        min:8
    },

    password:{
        type:String,
        min:8
    }
})

module.exports = mongoose.model('userdb', userSchema)