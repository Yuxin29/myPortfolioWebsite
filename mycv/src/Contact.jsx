import React from "react";
import './Contact.css'

import profilePic from './assets/profile.jpg';

function Contact() {
    return (
        <div id="contact">
            <img 
            src={profilePic} 
            alt="Yuxin Wu" 
            style={{ 
            width: "150px", 
            height: "150px", 
            borderRadius: "50%",  
            objectFit: "cover",    
            marginBottom: "1rem" 
            }} 
            />
            <p>feel free to reach out me</p>
        </div>
    );
}

export default Contact