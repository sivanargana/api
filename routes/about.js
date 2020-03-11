const express = require('express');
const router = express.Router();
const conn = require('../db');
const Model = require('../models/about');
  
router.post("/", function (req, res) {
    Model.findByIdAndUpdate('5e69058f703a6743bc6856f8', req.body,{useFindAndModify:false}, function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})

module.exports = router;