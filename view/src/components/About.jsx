import React from "react";
import TitleToShow from "./TitleToShow";

const About = () => {
  return (
    <div className="about">
      <TitleToShow specialClass="about__title" text="About" />
      <div className="about__description">

      
      <p >
        I learned to code as a self taught with the help of Free Code Camp,
        Google, Youtube, Stack Overflow, ...
      </p>
      <h4>My skills</h4>
      <h5>Front end:</h5>
      <ul>
        <li>HTML5, CSS3 and javascript</li>
        <li>React.js</li>
        <li>Bootstrap (class and react component)</li>
        <li>Scss (Sass preprocessor)</li>
        <li>Make sites responsive</li>
        <li>Convert picture/psd to html/css/js</li>
        <li>Make Ajax request with async.await or Axios</li>
        <li>Use React-router to make path with react</li>
        <li>Make chart with D3.js</li>
      </ul>

      <h5>Back end:</h5>
      <ul>
        <li>I use NodeJs with express</li>
        <li>Create server</li>
        <li>Create route</li>
        <li>Create middleware</li>
        <li>Use template engine (Pug.js)</li>
        <li>File download</li>
        <li>Connection and CRUD with MongoDB</li>
        <li>Make test with Chai.js</li>
        <li>Configure the projects as MVC</li>
      </ul>
      </div>
    </div>
  );
};

export default About;
