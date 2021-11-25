import React from "react";
import TitleToShow from "./TitleToShow";

const About = () => {
  return (
    <div className="container" >

      
      
    <div className="about">
      <TitleToShow specialClass="about__title" text="About" />
      <div className="about__description">
      
      

      <div className="about__top">

      <p>
        Building a Saas, with C#.Net core and Bootstrap, for architects to manage their projects.
      </p>
      <p>
        I learned to code as a self taught with the help of Free Code Camp,
        Google, Youtube, Stack Overflow, ...
      </p>

        <div className="top__profilePicture">
        <img src="./img/anthoVDO.jpg" alt="antho's profile"  className="top__profilePicture__picture"/>
      </div>
      </div>


      <h4 className="about__subtitle">Soft skills</h4>
      <p>I worked as a field technician in IT, more precisely in antennas, for 5 years.</p>
      <p>My job was to control alarms, change or repair parts, configure 2G, 3G, 4G cards and transmissions. I also had to make reports to send to subcontractors.
      also helped to manage various projects such as TomorrowLand, Rock Werchter, Pukklepops, Spa-Francorchamps, ...</p>
      <p>The telecommunication world is a bit like the development world, it changes fast. That's why I'm constantly learning.</p>
      <p>This allowed me to acquire skills like:</p>
      <ul>
        <li>autonomy (I worked alone and had to manage my interventions)</li>
        <li>stock management</li>
        <li>report writing (I sent detailed reports with photos during my interventions to be able to invoice the customer or send subcontractors)</li>
        <li>communication (I worked in repeaters which were sometimes located in companies)</li>
        <li>understanding and acting on priority interventions (I had to manage and plan interventions according to their priorities)</li>
      </ul>
      <h4 className="about__subtitle">Hard skills</h4>
      <h5 className="about__stack__title">Front end:</h5>
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

      <h5 className="about__stack__title">Back end:</h5>
      <ul>
        <li>NodeJs with express</li>
        <li>C#/.Net</li>
        <li>Create server</li>
        <li>Create route</li>
        <li>Create middleware</li>
        <li>Create login</li>
        <li>Use template engine (Pug.js)</li>
        <li>File download</li>
        <li>Connection and CRUD with MongoDB</li>
        <li>CRUD with .Net Entity framework to Microsoft SQL Server and SQLite</li>
        <li>Make test with Chai.js</li>
        <li>Configure the projects as MVC</li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default About;
