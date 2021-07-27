import React from 'react';
import TitleToShow from './TitleToShow';

const About = (props) => {
    return (
        <div className="about">
        < TitleToShow specialClass="about__title" text="About" screenPosition={props.screenPosition} />
        {/* <h3 className="about__title">About</h3> */}
        <p className="about__description">
        I learned to code with FreeCodeCamp

        </p>
            
        </div>
    );
};

export default About;