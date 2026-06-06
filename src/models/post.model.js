const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    post:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    }
});//skeleton of post data 

const postModel=mongoose.model('Posts',postSchema);//jo bhi post ka data hoga wo post name ke collection me jayega aur uska schema postSchema hoga

module.exports=postModel;
