import React from 'react';
import styles from './signup.module.css';



const Signup =()=>{
    return(
    <form className={styles.signupForm}>
        <h1>New User Sign Up</h1>
        <div className="mb-3">
            <label  className="form-label">Fisrt Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Retype Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}

export default Signup;