const express = require('express')
const user = require('../models/user')
const { request } = require('express')

const router = express.Router()

router.post('/signup', (requesst, response)=> {
    const newUser = new user({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    newUser.save()
            .then((data) => {
                response.json(data)
            })
            .catch((error) => {
                response.json(error)
            })
})