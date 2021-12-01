import React from "react";
import TitleToShow from "./TitleToShow";
import Stack from "./Stack";

const About = () => {
  return (
    <div className="container" >

      
      
    <div className="about">
      <TitleToShow specialClass="about__title" text="About" />
      <div className="about__description">
      
      

      <div className="about__top">

        <div className="top__profilePicture">
          <img src="./img/anthoVDO.jpg" alt="antho's profile"  className="top__profilePicture__picture"/>
        </div>

        <div className="top__description">
          <h4 className="about__subtitle">My work</h4>
          <p>
          Building a Saas, with C#.Net core and Bootstrap, for architects to manage their projects.
          </p>
          <p>
            I learned to code as a self taught with the help of Free Code Camp,
            Google, Youtube, Stack Overflow, ...
          </p>

        </div>

        <div className="top__certification">
          <h4 className="about__subtitle">Certifications</h4>
          <ul className="about_certification-list">
            <li className="about__certification-item"><a href="https://www.freecodecamp.org/certification/anthovdo/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design Certification</a></li>
            <li className="about__certification-item"><a href="https://www.freecodecamp.org/certification/anthovdo/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">Javascript Algorithm And Data Structure Certification</a></li>
            <li className="about__certification-item"><a href="https://www.freecodecamp.org/certification/anthovdo/front-end-development-libraries" target="_blank" rel="noopener noreferrer">Front End Development Libraries</a></li>
            <li className="about__certification-item"><a href="https://www.freecodecamp.org/certification/anthovdo/data-visualization" target="_blank" rel="noopener noreferrer">Data Visualization</a></li>
            <li className="about__certification-item"><a href="https://www.freecodecamp.org/certification/anthovdo/back-end-development-and-apis" target="_blank" rel="noopener noreferrer">Apis and Microservices</a></li>
            <li className="about__certification-item"><a href="https://www.udemy.com/certificate/UC-4cdc0d83-6f14-4e59-9153-dacaf5a56cb6/" target="_blank" rel="noopener noreferrer">Développeur C# | Formation complète 2021</a></li>
          </ul>
        </div>
        
      </div>

      <Stack />

      <div className="about_skills">

      

        <div className="about__softskills">
          <h4 className="about__subtitle">Soft skills</h4>
          <p>I worked as a field technician in IT, more precisely in antennas, for 5 years.</p>
          <p>My job was to control alarms, change or repair parts, configure 2G, 3G, 4G cards and transmissions. I also had to make reports to send to subcontractors.
          also helped to manage various projects such as TomorrowLand, Rock Werchter, Pukklepops, Spa-Francorchamps, ...</p>
          <p>The telecommunication world is a bit like the development world, it changes fast. That's why I'm constantly learning.</p>
          <p>This allowed me to acquire skills like:</p>
          <ul className="about_certification-list">
            <li>Autonomy (I worked alone and had to manage my interventions)</li>
            <li>Stock management</li>
            <li>Report writing (I sent detailed reports with photos during my interventions to be able to invoice the customer or send subcontractors)</li>
            <li>Communication (I worked in repeaters which were sometimes located in companies)</li>
            <li>Understanding and acting on priority interventions (I had to manage and plan interventions according to their priorities)</li>
          </ul>
        </div>
        


        

        <div className="about__hardskills">
            <h4 className="about__subtitle">Hard skills</h4>
            <h5 className="about__stack__title">Front end:</h5>
            <ul className="about_certification-list">
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
            <ul className="about_certification-list">
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
    </div>
    </div>
  );
};

export default About;
