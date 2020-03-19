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
   
  var upload = multer({ storage: storage }).any()

  
router.post("/", function (req, res) {
   upload(req,res,function(err){

    if(!err){
      console.log(req.files);
    }

   })
})

module.exports = router;