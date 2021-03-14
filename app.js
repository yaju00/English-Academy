'use strict'
const express=require('express');
const app=express();
const path = require('path');
const mongoose = require('mongoose');
const port=3000;
mongoose.connect('mongodb://localhost:27017/client', {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('we are connected');
    });

  const RegistrationSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please enter the first name']
    },
    lname: {
        type: String,
        required: [true, 'Please enter the last name'],
    },
    email: {
        type: String,
        required:[true, 'Please enter a valid email id'],
        unique:true,
    },
    password: {
        type: String,
        required: [true,'Please enter the password']
    },
    cpassword: {
        type: String,
        required: [true,'Please enter the password'],
    },
    country: {
        type: String,
        required:  [true, 'Please enter the country name']
    },
    zip: {
        type: Number,
        required: [true, 'Please enter the zip code']
    },
  });
// const signinDetails = mongoose.model('signinDetails', signinSchema);
const User = mongoose.model('User', RegistrationSchema);
app.use('/static',express.static('static'))
app.use(express.urlencoded({extended:false}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
  
app.set('views',path.join(__dirname,'view'));
app.get("/",(req,res)=>{
    res.render('index.html', { title: 'Hey', message: 'Hello there!' })
});
app.get("/signin",(req,res)=>{
    res.render('signin.html')
});
app.get("/signup",(req,res)=>{
    res.render('signup.html')
});
app.get("/postsignup",(req,res)=>{
    res.render('signin.html')
});

app.post('/signin',async(req,res)=>{
   const email=req.body.email;
   const password=req.body.password;
   const user= await User.findOne({email:email});
   if(user!==null){
    if(user.password===password){
        res.status(201).render('successfullogin')
    }
    else{
        res.send('invalid login details')
    }
   }
   else{
    res.send('first register yourself')
   }
  
    console.log(user.email);
})  
app.post('/signup',(req,res)=>{
    const myData=new User(req.body);
    const password=req.body.password;
    const cpassword=req.body.cpassword;
    if(cpassword===password){
        myData.save().then(()=>{
            res.render('successfulsignup')
        }).catch((e)=>{
            res.status(400).send(`${e}`)
        });
    }else{
        res.send('Password does not match. Try Again!')
    }
    
    console.log(myData)
  })
app.listen(port,()=>{
    console.log(`this application is running on ${port} port`);
})