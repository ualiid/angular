const express =require('express')
const router = express.Router()
const Comment = require('../models/comment')


router.route('/comment')
.get((req,res,next)=>{
    Comment.find((err,comment)=>{
        if(err) return next(err)
        res.json(comment)
    })
})
.post((req,res,next)=>{
    Comment.create({...req.body,status:true,date:new Date()},
    (err,comment)=>{
        if(err) return next(err)
        res.json(comment);
    }
    )
})
.put((req,res,next)=>{
    Comment.findByIdAndUpdate(req.body._id,{
        status:true,
        comment:req.body.comment
    },{new:true},(err,comment)=>{
        if(err) return next(err);
        console.log('****************UaliDMB****************')
        console.log('comment updated Successfully');
        console.log('****************UaliDMB****************')
        res.json(comment)
    })
})
router.route('/conceal')
.put((req,res,next)=>{
    Comment.findByIdAndRemove(req.body._id,{status:req.body.status},{new:true},(err,comment)=>{
        if(err) return next(err);
        res.json(comment)
    });
})
module.exports = router;