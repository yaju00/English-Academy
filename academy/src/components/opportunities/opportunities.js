import React,{Component} from 'react';
import speaking from '../../images/speaking.png';
import writing from '../../images/writing.jpeg';
import listening from '../../images/listening.jpeg';
import testseries from '../../images/exam.jpeg';
import styles from './opportunities.module.css';


class Opprortunities extends Component{
    constructor(props){
        super(props)
        this.state={
            thumnails:[speaking,writing,listening,testseries],
            thumnailDescription:['Speaking Skills','Writing SKills','Listening SKills','Test series'],

        }
    }
    
    render(){
        return(
        <div style={{display:this.props.displayStatus?'block':'none'}} className={styles.maindiv}>
            <h1>Plethora of Opportunities in English Academy</h1>
            <div className="container-fluid" >
                <div className="row text-center">
                {
                 this.state.thumnails.map((el,index)=>{
                     return <div id={styles["col-sm-3"]} className="col-sm-3">
                              <img className={styles.image}src={el}/>
                              <h4>{this.state.thumnailDescription[index]}</h4>
                            </div>
                 })
                    }   
                    
                </div>
            </div>
        </div>
        )
    }
}

export default Opprortunities;
