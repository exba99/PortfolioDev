import React from 'react';
import './Social.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Social() {
    return (
        <div className="Social">
           <ul>
               <li> <FaInstagram /> </li>
               <li> <FaLinkedinIn /> </li>
               <li> <FaTwitter /> </li>
               <li> <FaFacebookF /> </li>
           </ul> 
        </div>
    )
}

export default Social
