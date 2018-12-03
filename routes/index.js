const express = require('express');
const router = express.Router();
const FileUploads = require('../models/fileUpload');
const path = require('path');

router.get('/', (req, res) =>{
    FileUploads.find({}, (err, results) =>{
        //console.log("Images Found", results)
        const images = [];
        results.forEach((image) =>{
            let basename = path.basename(image.imgPath);
            res.locals.basename = basename
            console.log(basename);
            const imgPath = `./uploads/${basename}`;
            console.log("Final path", imgPath)
            images.push(imgPath);
        });

        console.log(images);
        res.locals.shots = images;
        res.render("index");
    })
    
});

module.exports = router;