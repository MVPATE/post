const express = require("express");
const app=express()
const bodyParser=require('body-parser')
const multer = require("multer")
const path=require('path')
const cors=require('cors')

const route=new express.Router()
route.use(cors())
route.use(bodyParser.json())
route.use(bodyParser.urlencoded({extended:true}))
route.use(express.static('public'))
const storage=multer.diskStorage({
    destination:(req,File,cb)=>{
        cb(null,path.join(__dirname,'../public/images'))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})
const userController=require('../Controller/userController');
//const userImage = require("../Controller/userController");
route.post('/upload',upload.single('file'),userController.userImage);
route.get('/upload',userController.userpost)


module.exports=route