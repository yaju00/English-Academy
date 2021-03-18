import React from 'react';
import styles from './contact.module.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';



const Contact =(props)=>{
    return(
    <div className={styles.contact} style={{display:props.displayStatus?'block':'none'}}>
        <h1> Follow us</h1>
        <h3><FaFacebookSquare className={styles.icon1} /> www.facebook.com/English_Academy</h3>
        <h3><FaMailBulk className={styles.icon2} /> English_Academy@xyz.com</h3>
        <h3><FaInstagram className={styles.icon3} /> www.instagram.com/English_Academy</h3>
        <h3><FaTwitterSquare className={styles.icon4} /> www.twitter.com/English_Academy</h3>
    </div>
        
    )
}

export default Contact;