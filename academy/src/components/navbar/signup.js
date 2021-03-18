import React, { Component } from 'react';
import styles from './signup.module.css';
import axios from 'axios';



class Signup extends Component{
   constructor(props){
       super(props)
       this.state={
           user:{
               fname:'',
               lname:'',
               email:'',
               password:'',
               cpassword:'',
           }
       }
   }
   onChangefname=(e)=>{
    this.setState({fname:e.target.value})
  }
   onChangelname=(e)=>{
    this.setState({lname:e.target.value})
  }
   onChangeemail=(e)=>{
    this.setState({email:e.target.value})
  }
   onChangepassword=(e)=>{
    this.setState({password:e.target.value})
  }
   onChangecpassword=(e)=>{
    this.setState({cpassword:e.target.value})
  }

   onSubmit=(e)=>{
    e.preventDefault();
       const user={
           fname:this.state.fname,
           lname:this.state.lname,
           email:this.state.email,
           password:this.state.password,
           cpassword:this.state.cpassword,
       }
       console.log(user);
       axios.post('http://localhost:5000/signup',user)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(`something went off ${err}`)) 

       window.location.replace('http:/localhost:5000/login')
   }
    

   render(){
    return(
        <form onSubmit={this.onSubmit}
        style={{display:this.props.displayStatus?'block':'none'}} className={styles.signupForm}>
            <h1>New User Sign Up</h1>
            <div className="mb-3">
                <label  className="form-label">Fisrt Name</label>
                <input onChange={this.onChangefname}
                value={this.state.fname}
                type="text" name="fname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input onChange={this.onChangelname}
                value={this.state.lname}
                type="text" name="lname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={this.onChangeemail}
                value={this.state.email}
                type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={this.onChangepassword}
                value={this.state.password}
                type="password" name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Retype Password</label>
                <input onChange={this.onChangecpassword}
                value={this.state.cpassword}
                type="password" name="cpassword" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button id={styles["signupbutton"]} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

   }

    
   
}

export default Signup;