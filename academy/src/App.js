import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import About from './components/navbar/about';
import Contact from './components/navbar/contact';
import Login from './components/navbar/login';
import Signup from './components/navbar/signup';
import imgback from './images/img1.jpg';
import Opprortunities from './components/opportunities/opportunities';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      firstImageStatus:true,
      opprortunitiesStatus:true,
    }
  }
  statusChangerContact=()=>{
    this.setState({firstImageStatus:false});
    this.setState({opprortunitiesStatus:false});
    
  }
  statusChangerHome=()=>{
    this.setState({firstImageStatus:true});
    this.setState({opprortunitiesStatus:true});
    
  }
  render(){
    return (
      <Router >
        <Navbar statusChangerContact={this.statusChangerContact} 
        statusChangerHome={this.statusChangerHome}/>
        <br/>
        <img style={{display:this.state.firstImageStatus?'block':'none'}} src={imgback} className={styles.imgback}/>
        <div className={styles.maindiv}>
          <Route exact path='/contact'><Contact /></Route>
        </div>
        <div className={styles.maindiv}>
          <Route exact path='/about'><About /></Route>
        </div>
        <div className={styles.maindiv}>
          <Route path='/'></Route>
        </div>
          <Route exact path="/login"  component ={Login}/>
          <Route exact path="/signup"  component ={Signup}/>
        <Opprortunities displayStatus={this.state.opprortunitiesStatus} />
      </Router>
    );
  }
  
}

export default App;
{/* <Route path="/about"  component ={About}/>
          <Route path="/contact"  component ={Contact}/>
          <Route path="/login"  component ={Login}/>
          <Route path="/signup"  component ={Signup}/> */}