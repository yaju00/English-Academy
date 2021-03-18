import React from 'react';
import styles from './about.module.css';


const About =(props)=>{
    return(
        <div style={{display:props.displayStatus?'block':'none'}} className={styles.about}>
            We are a institute, who is tirelessly for the amazing learning experience of our students and has been supported by the testimonies of our students and the results which our students have obtained in various examinations across the globe.<br/><br/>

            We are a team of like minded teachers who are working towards the same goal. 
        </div>
    )
}

export default About;