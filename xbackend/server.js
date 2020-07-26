const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userURLS = require('./api/auth')
//const productsURLS = require('./api/products')

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, { useNewUrlParser: true }, () => {
    console.log('DB CONNECTED!')
})
app.use(express.json())
app.use('/user', userURLS)
//Qapp.use('/products', productsURLS)


app.listen(7000, ()=> {
    console.log('Server is Up & Running!')
})