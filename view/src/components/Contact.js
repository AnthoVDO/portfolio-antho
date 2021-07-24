import React from 'react';
import { FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { ImTwitter } from "react-icons/im";
import { IconContext } from "react-icons";

const Contact = () => {



    return (
        <div className="contact">
        <div className="contact__container">
        <IconContext.Provider value={{ size:"2em", color:"#3c6e71"}} >

            <ul className="contact__container__list">
            <li className="contact__container__list__item"><a href="https://github.com/AnthoVDO" target="_blank" rel="noreferrer noopener"> <FaGithub/> </a></li>
            <li className="contact__container__list__item"><a href="https://twitter.com/didacteantho" target="_blank" rel="noreferrer noopener"> <ImTwitter/> </a></li>
            <li className="contact__container__list__item"><a href="" target="_blank" rel="noreferrer noopener"> <SiMinutemailer/> </a></li>
            </ul>

        </IconContext.Provider>
        </div>
        
            
        </div>
    );
};

export default Contact;