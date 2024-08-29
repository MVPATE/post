
const express=require('express')
const app=express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users');
const ejs=require('ejs');
const cors=require('cors')
app.use(cors())
app.set('view engine','ejs')
app.listen(8000)

  app.get('/', (req, res) => {
    res.render('index');
  });
  
  // Handle file upload
  



    

  

const route=require("./Router/userRoute")
app.use('/',route)




