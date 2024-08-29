const mongoose=require('mongoose')

const imgSchema=new mongoose.Schema({
    name:String,
    imgpath:String
       
        })
    
    
    //const ImageModel=mongoose.model('upload',imgSchema);
    module.exports=ImageModel=mongoose.model('upload',imgSchema);