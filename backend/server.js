'use strict'
require('dotenv').config()
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json())

const port=process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,
    useUnifiedTopology: true ,useCreateIndex:true})
    .then(()=>{console.log('we are connected')})
    .catch(err=> console.log(err));  

const UserRouter=require('./user.route')    

app.use('/',UserRouter)


// app.post('/signin',async(req,res)=>{
//    const email=req.body.email;
//    const password=req.body.password;
//    const user= await User.findOne({email:email});
//    if(user!==null){
//     if(user.password===password){
//         res.status(201).render('successfullogin')
//     }
//     else{
//         res.send('invalid login details')
//     }
//    }
//    else{
//     res.send('first register yourself')
//    }
  
//     console.log(user.email);
// })  
app.listen(port,()=>{
    console.log(`this application is running on ${port} port`);
})