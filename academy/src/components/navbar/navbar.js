import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';


class Navbar extends Component{
  constructor(props){
    super(props)
  }
  // statusChanger=()=>{
  //   console.log(this.props.statusChanger);
  // }
    render(){
        return(
            <nav id={styles["topbar"]} className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li onClick={this.props.statusChangerHome}className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li onClick={this.props.statusChangerAbout}className="navbar-item">
              <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li onClick={this.props.statusChangerContact}className="navbar-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
            <div className={styles.logindiv}onClick={this.props.statusChangerLogin} >
              <Link to="/login" >Login</Link>
            </div>
            <div className={styles.logindiv} onClick={this.props.statusChangerSignup}>
              <Link to="/signup" >Signup</Link>
            </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;