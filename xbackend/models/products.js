const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        min:4
    },
    img: 
      { data: Buffer, contentType: String },
    price:{
        type:Number
    },
    available:{
        type:Boolean
    }
})

module.exports = mongoose.model('productdb', productSchema)