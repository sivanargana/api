const express = require('express');
const router = express.Router();
const multer  = require('multer')
const path = require('path');
const root = path.resolve(__dirname,'..');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, root+'/uploads')
    },
    filename: function (req, file, cb) {
       
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

  
router.post("/",upload.single('file'), function (req, res) {
    res.json(req.file)
})

module.exports = router;