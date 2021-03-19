const mongoose=require('mongoose')
const express = require('express')
const router = express.Router()

let User=require('./user.model');

router.route('/').post(async(req,res)=>{
   const email=req.body.email;
   const password=req.body.password;
   console.log(req.body)
   const user= await User.findOne({email:email});
   if(user!==null){
    if(user.password===password){
        res.status(201).json('1')
    }
    else{
        res.json('2')
    }
   }
   else {
    res.json('3')
   }
})

router.route('/signup').post((req,res)=>{
    const fname=req.body.fname
    const lname=req.body.lname
    const email=req.body.email
    const password=req.body.password
    const cpassword=req.body.cpassword

    const newUser=new User({
        fname,
        lname,
        email,
        password,
        cpassword,
    })

    if(password===cpassword){
       newUser.save()
       .then(()=>{res.status(201).json('1')})
        .catch(err=>{res.json(`2`)
    });
    }
    else{
        res.json('Password does not match. Try Again!')
    }
})

module.exports=router