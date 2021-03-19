import React from 'react';
import styles from './footer.module.css';

const Footer=(props)=>{
    return(
        <div className={styles.footer} style={{display:props.displayStatus?'block':'none'}} >
            <div className={styles.subdiv1}>
            <p>Join Early to have the edge</p>
            </div>
            <div className={styles.subdiv2}>
            <p>Let's Start then!</p>
            </div>
            <div className={styles.subdiv3}>
            <p>Please Register yourself</p>
            </div>
        </div>
    )
}

export default Footer;