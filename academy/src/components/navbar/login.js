import React,{Component} from 'react';
import styles from './login.module.css';
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
                email:'',
                password:'',
                successStatus:false,
                failureStatus:false,
                errorStatus:false,
                signupStatus:false,
        }
    }
  onChangeEmail=(e)=>{
    this.setState({email:e.target.value})
  }  
  onChangePassword=(e)=>{
    this.setState({password:e.target.value})
  }  

  onSubmit=(e)=>{
    e.preventDefault();
    const email={
        email:this.state.email,
        password:this.state.password
    }
    console.log(email);
    axios.post('http://localhost:5000/',email)
    .then(res=>{
       if(res.data==='1'){
        this.setState({
                email:'',
                password:'',
                successStatus:true,
                failureStatus:false,
                errorStatus:false,
                signupStatus:false,
                          
            })
       }
       else if(res.data==='2'){
        this.setState({
            email:'',
            password:'',
            successStatus:false,
            failureStatus:true,
            errorStatus:false,
            signupStatus:false,
                      
        })
       }
       else if(res.data==='3'){
        this.setState({
            email:'',
            password:'',
            successStatus:false,
            failureStatus:false,
            errorStatus:false,
            signupStatus:true,
                      
        })
       }
    }
    )
    .catch(err=>{
        console.log(err)
        if(err){
            this.setState({
                email:'',
                password:'',
                successStatus:false,
                failureStatus:false,
                errorStatus:true,
                signupStatus:false,
                          
            })
        }
    })
  }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} style={{display:this.props.displayStatus?'block':'none'}} className={styles.loginForm}>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={this.onChangeEmail}
                        value={this.state.email}                    type="email" name="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={this.onChangePassword}
                        value={this.state.password} 
                        type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button  id={styles["loginbutton"]} type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div style={{display:this.state.successStatus?'block':'none'}}>
                   <h3 style={{textAlign:'center'}}>Logged In Successfully</h3>
                </div>
                <div style={{display:this.state.failureStatus?'block':'none'}}>
                   <h3 style={{textAlign:'center'}}>Please enter valid details</h3>
                </div>
                <div style={{display:this.state.errorStatus?'block':'none'}}>
                   <h3 style={{textAlign:'center'}}>Something went wrong</h3>
                </div>
                <div style={{display:this.state.signupStatus?'block':'none'}}>
                   <h3 style={{textAlign:'center'}}>Please Signup First</h3>
                </div>
            </div>
        )

    }  
    
}

export default Login;