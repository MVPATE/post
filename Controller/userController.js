const ImageModel = require('../Models/userModel')
const userImage = (req, res) => {
    const saveimage = new ImageModel({
        name: req.body.name,
        imgpath: req.file.originalname
    })
    saveimage
        .save()
        .then((res) => {
            console.log(saveimage)
        }).catch((error) => {
            console.log(error, "error")});
    res.send('upload successfully')
    
    }
    const userpost = (req,res)=>{
        res.render('userPost')

    }

module.exports = {
    userImage,
    userpost
}


