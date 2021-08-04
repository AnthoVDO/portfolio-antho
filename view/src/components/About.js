import React from 'react';
import TitleToShow from './TitleToShow';

const About = () => {
    return (
        <div className="about">
        < TitleToShow specialClass="about__title" text="About"/>
        <p className="about__description">
        I learned to code with FreeCodeCamp

        </p>
            
        </div>
    );
};

export default About;