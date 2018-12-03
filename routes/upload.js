const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');

router.get('/', (req, res) =>{
    res.render("upload");
});

router.post('/', (req, res) =>{
    const uploadPath = path.join(__dirname, '../uploads/');
    console.log(uploadPath);

    const form = new formidable.IncomingForm();
    form.uploadDir = uploadPath;
    form.keepExtensions = true;
    form.multiples = false;

    form.parse(req, (err, fields, files) =>{
        console.log("Incoming files", files);
        res.send("Uploaded successfully");
    })
})

module.exports = router;