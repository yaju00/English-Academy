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
      loginStatus:false,
      signupStatus:false,
      aboutStatus:false,
      contactStatus:false,
    }
  }
  statusChangerContact=()=>{
    this.setState({firstImageStatus:false});
    this.setState({opprortunitiesStatus:false});
    this.setState({aboutStatus:false});
    this.setState({contactStatus:true});
    this.setState({loginStatus:false});
    this.setState({signupStatus:false});
    
  }
  statusChangerHome=()=>{
    this.setState({firstImageStatus:true});
    this.setState({opprortunitiesStatus:true});
    this.setState({aboutStatus:false});
    this.setState({contactStatus:false});
    this.setState({loginStatus:false});
    this.setState({signupStatus:false});
    
  }
  statusChangerLogin=()=>{
    this.setState({firstImageStatus:false});
    this.setState({opprortunitiesStatus:false});
    this.setState({aboutStatus:false});
    this.setState({contactStatus:false});
    this.setState({loginStatus:true});
    this.setState({signupStatus:false});
  }
  statusChangerSignup=()=>{
    this.setState({firstImageStatus:false});
    this.setState({opprortunitiesStatus:false});
    this.setState({aboutStatus:false});
    this.setState({contactStatus:false});
    this.setState({loginStatus:false});
    this.setState({signupStatus:true});
  }

  statusChangerAbout=()=>{
    this.setState({firstImageStatus:false});
    this.setState({opprortunitiesStatus:false});
    this.setState({aboutStatus:true});
    this.setState({contactStatus:false});
    this.setState({loginStatus:false});
    this.setState({signupStatus:false});
  }
  render(){
    return (
      <Router >
        <Navbar statusChangerContact={this.statusChangerContact} 
        statusChangerHome={this.statusChangerHome}
        statusChangerLogin={this.statusChangerLogin}
        statusChangerSignup={this.statusChangerSignup}
        statusChangerAbout={this.statusChangerAbout}/>
        <br/>
        <img style={{display:this.state.firstImageStatus?'block':'none'}} src={imgback} className={styles.imgback}/>
        <div>
          <Route exact path='/contact'><Contact displayStatus={this.state.contactStatus}/></Route>
        </div>
        <div >
          <Route exact path='/about'><About displayStatus={this.state.aboutStatus}/></Route>
        </div>
        <div>
          <Route path='/'></Route>
        </div>
        <div>
          <Route path='/login'><Login displayStatus={this.state.loginStatus}/></Route>
        </div>
        <div>
          <Route path='/signup'><Signup displayStatus={this.state.signupStatus} /></Route>
        </div>
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