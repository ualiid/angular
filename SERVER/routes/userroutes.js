const express =require('express');
const router = express.Router();
const User = require('../models/user')
router.route('/user')

.get((req,res,next)=>{
    User.find((err,user)=>{
        if(err) return next(err)
        res.json(user)
    })
})
.post((req,res,next)=>{
    User.create({
        username:req.body.username,
        password:req.body.password
    },(err,user)=>{
        if(err) return next(err);
        console.log('****************UaliDMB****************')
        console.log('User Created Successfully');
        console.log('****************UaliDMB****************')
        res.json(user)
    })
})
module.exports = router