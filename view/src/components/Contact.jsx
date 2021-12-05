import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IconContext } from "react-icons";

const Contact = () => {



    return (
        
        <div className="contact">
        <h2 className="contact-title">
            Contact me
        </h2>
        <div className="contact__container">
        <IconContext.Provider value={{ size:"2em", color:"#EF8612"}} >

            <ul className="contact__container__list">
            <li className="contact__container__list__item"><a href="https://github.com/AnthoVDO" target="_blank" rel="noreferrer noopener"> <FaGithub/> </a></li>
            <li className="contact__container__list__item"><a href="https://twitter.com/didacteantho" target="_blank" rel="noreferrer noopener"> <ImTwitter/> </a></li>
            <li className="contact__container__list__item"><a href="https://www.linkedin.com/in/anthony-van-den-ostende-b5268310b/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a></li>
            </ul>

        </IconContext.Provider>
        </div>
        
            
        </div>
        
    );
};

export default Contact;