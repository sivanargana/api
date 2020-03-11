const express = require('express');
const router = express.Router();
const conn = require('../db');
const Model = require('../models/skills');
  
router.post("/bulk", function (req, res) {
    Model.collection.insert(req.body.bulk,function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})
router.post("/add", function (req, res) {
    let model = new Model(req.body);
    model.save(function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})
router.get("/all", function (req, res) {
    Model.find({},function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})
router.get("/single/:id", function (req, res) {
    Model.findById(req.params.id,function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})
router.post("/update/:id", function (req, res) {
    Model.findByIdAndUpdate(req.params.id, req.body,{useFindAndModify:false}, function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})
router.post("/delete/:id", function (req, res) {
    Model.findByIdAndRemove(req.params.id,{useFindAndModify:false}, function(err,resp){
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(resp)
        }
    })
})
module.exports = router;