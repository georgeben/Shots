const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const FileUpload = require('../models/fileUpload');

router.get('/', (req, res) =>{
    res.render("upload");
});

router.post('/', (req, res) =>{
    const uploadPath = path.join(__dirname, '../public/uploads');
    console.log(uploadPath);

    console.log("Image caption", req.body.caption)

    const form = new formidable.IncomingForm();
    form.uploadDir = uploadPath;
    form.keepExtensions = true;
    form.multiples = false;

    form.parse(req, (err, fields, files) =>{
        let imgPath = files.fileUpload.path;
        let imgCaption = fields.caption;
        console.log("Caption", imgCaption);
        console.log("Image path", imgPath);

        let fileUpload = new FileUpload({
            name: files.fileUpload.name,
            caption:imgCaption,
            imgPath:imgPath
        });
        fileUpload.save()
        .then(() => console.log("Saved succesafully"))
        .catch((err) => console.log("Oh no, an error "+ err.message));
        
        console.log("Incoming files", files);
        res.redirect('/');
    })
})

module.exports = router;