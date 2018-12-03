const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) =>{
    const imageName = req.query.img;
    console.log("Image name", req.query.img)
    const imgFolderPath = path.join(__dirname, '../public/uploads');
    console.log(imgFolderPath);
    res.download(path.resolve(imgFolderPath, imageName));
});

module.exports = router;