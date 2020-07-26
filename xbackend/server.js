const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userURLS = require('./api/user')
const productsURLS = require('./api/products')

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, () => {
    console.log('DB CONNECTED!')
})
app.use(express.json())
app.use('/user', userURLS)
app.use('/products', productsURLS)


app.listen(7000, ()=> {
    console.log('Server is Up & Running!')
})