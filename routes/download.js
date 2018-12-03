const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) =>{
    const imgFolderPath = path.join(__dirname, '../uploads/');
    console.log(imgFolderPath);
    res.download(path.resolve(imgFolderPath, "upload_25d6bd242e664c21a7ac30958e07537d.png"));
});

module.exports = router;