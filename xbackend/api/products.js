const express = require('express')
const router = express.Router()
const fs = require('fs')
const product = require('../models/products');
const { request } = require('http');
const { response } = require('express');


router.post('/add-product', (request,response) => {
    var newItem = new product({
        name:request.body.name,
        img:request.body.img,
        price:request.body.price,
        available:request.body.available
    });
    newItem.img.data = fs.readFileSync(request.body.img)
    newItem.img.contentType = 'image/png';
    newItem.save()
            .then((data)=>{
                response.json(data)
            })
            .catch((error)=> {
                response.json(error)
            })
   });

router.get('/', (request, response) => {
       product.find()
            .then((data)=>{
            response.json(data)
            })
            .catch((error)=> {
                response.json(error)
            })
   })

router.get('/:id', (request, response) =>{
    product.findById(request.params.id)
    .then((data) =>{
        response.json(data)
    })
    .catch((error) =>{
        response.json(error)
    })
})

router.delete('/:id', (request, response) => {
    product.findByIdAndDelete(request.params.id)
     .then((data) => {
         response.json(data)
     })
     .catch((error) => {
         response.json(error)
     })
})

router.post('/update/:id', (request, response) => {
    product.findById(request.params.id)
      .then((data) => {
          data.name = request.body.name
          data.img = request.body.img
          data.price = request.body.price
          data.available = request.body.available
          data.save()
            .then(() => {
                response.json('Product Updated')
            })
      })
      .catch((error) => {
          response.json(error)
      })
})

module.exports = router
