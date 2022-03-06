const express = require('express')

const bodyparser = require('body-parser')

//var validator = require("email-validator");

const emailvalidator = require('email-validator') 

const app = express()

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json)

app.set('view engine','ejs')

app.get('/', (req, res) => {
      res.render('index',{info:''})
})

app.post('/emailaddressvalidator', (req, res) => {
      //get the user data
      console.log(req.body.emails)
      
      const valid = emailvalidator.validate(req.body.emails)

      if (valid) {
            res.render('index',{info:'Your Email Is Valid'})
      }
      else{
            res.render('index',{info:'Your Email Is inValid'})

      }
})

app.listen(5000, () => {
      console.log('App is listening on port 5000')
})