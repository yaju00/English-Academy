const mongoose=require('mongoose')

const signupSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please enter the valid first name'],
        trim:true,
        minlength:3,
        maxlength:32,

    },
    lname: {
        type: String,
        required: [true, 'Please enter the valid last name'],
        trim:true,
        minlength:3,
        maxlength:32,
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
    }
  },{timestamps:true});

  const User = mongoose.model('User', signupSchema);

  module.exports=User;