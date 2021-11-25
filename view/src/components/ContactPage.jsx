import React from 'react';
import {BsEnvelopeFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IconContext } from "react-icons";

const ContactPage = () => {
    return (
        <div className="container" >
        <h2 className="contactPageSubTitle">Get in touch</h2>
        <h1 className="contactPageTitle">Contact me</h1>
        <div className="contact-container">

        <div className="contact-wrapper">
            <h3>Social</h3>
            <IconContext.Provider value={{ size:"2em", color:"#3c6e71"}} >

            <ul className="contactPage__wrapper__social">
            <li className="contactPage__wrapper__social__item"><a href="https://github.com/AnthoVDO" target="_blank" rel="noreferrer noopener"> <FaGithub/> </a></li>
            <li className="contactPage__wrapper__social__item"><a href="https://twitter.com/didacteantho" target="_blank" rel="noreferrer noopener"> <ImTwitter/> </a></li>
            <li className="contactPage__wrapper__social__item"><a href="https://www.linkedin.com/in/anthony-van-den-ostende-b5268310b/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a></li>
            </ul>

        </IconContext.Provider>
        </div>
        <div className="contact-wrapper">
            <h3>Email</h3>
            <div className="contactPage__items">
            <IconContext.Provider value={{ size:"2em", color:"#3c6e71"}} >
            <BsEnvelopeFill/>
            </IconContext.Provider><a href="mailto:anthony.vdo@hotmail.be" > anthony.vdo@hotmail.be</a>
            </div>
        </div>
        <div className="contact-wrapper">
            <h3>Location</h3>
            <div className="contactPage__items">
            <IconContext.Provider value={{ size:"2em", color:"#3c6e71"}} > 
            <FaMapMarkedAlt/>     
            </IconContext.Provider><p>Namur, Belgium</p>
            </div>
        </div>

          
        </div>
        </div>
    );
};

export default ContactPage;