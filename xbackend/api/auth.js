const express = require('express')
const user = require('../models/user')
const bcrypt = require('bcrypt')

const router  = express.Router()

router.post('/signup', (request, response) => {
    const newUser = new user({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    newUser.save()
            .then((data)=>{
                response.json(data)
            })
            .catch((error)=>{
                response.json(error)
            })
})

router.post('/login' , async (request, response) => {
    const appUser = await user.findOne({email:request.body.email})
    if(!appUser){
        return response.status(400).send(' Cannot find user with entered email')
    }

    const correctPassword = await bcrypt.compare(request.body.password, appUser.password)
    if(!correctPassword){
        return response.status(400).send('Incorrect password entered!')
    }
    return response.send('logged in successfully')
})

module.exports = router