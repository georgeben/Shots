const mongoose = require('mongoose');

const imageUploadSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true
    },
    caption:{
        type:String,
    },
    imgPath:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Image Uploads', imageUploadSchema );