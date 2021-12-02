import React from "react";

import Header from './Header';
import Contact from './Contact';
import StackCard from "./StackCard";
import {
  Link
} from "react-router-dom";

import {FaLongArrowAltRight} from 'react-icons/fa';

const Home = (props)=>{

    const archiProjectManager = {
      "name": "ArchiProjectManager",
      "description": "ArchiProjectManager is a Saas that has been build to help Architects to manage theirs projects",
      "use":"It has been build with C#/.Net Razor pages and Bootstrap. I'm working on it and there are those features: You can login, logout, create an account. While inside, you can create your clients, manage them with a CRUD. After that, you can create a project according to a client and then manage the project as you want. Both client and project dashboard have tool to find them like differents sorting, filter by word or filter by project phase.",
      "useLink":["./use/archiprojectmanager.png","./use/archiprojectmanager002.png","./use/archiprojectmanager003.png","./use/archiprojectmanager04.png","./use/archiprojectmanager05.png","./use/archiprojectmanager06.png","./use/archiprojectmanager07.png"],
      "link": "https://archiprojectmanager.azurewebsites.net/",
      "github": "https://github.com/AnthoVDO/ArchiProjectManager",
      "technologie": [
          "bootstrap",
          "csharp",
          "dotnet"
      ],
      "stack": "Full"
  }

    return(
      <div className="container" >
      <div className="top">

      <Header/>
      <h2 className="home-h2">I'm building fullstack websites with
      <span className="home-h2-logo">
        <img src="/icons/react.svg" alt="React JS logo" width="25px" height="25px" className="home-h2-stack"/> 
        <img src="/icons/nodejs.svg" alt="Node JS logo" width="25px" height="25px" className="home-h2-stack"/> 
        <img src="/icons/csharp.svg" alt="C# logo" width="25px" height="25px" className="home-h2-stack"/> 
        <img src="/icons/dotnet.svg" alt=".NET logo" width="25px" height="25px" className="home-h2-stack"/>
      </span>
      
      </h2>
     
      </div>
      


      <div className="home-mainProject">
        <h2>My project</h2>
        <StackCard 
          element={archiProjectManager}
          addClass="home-mainProject-card"
          key={"home-mainProject archiprojecmanager"}
         />
         <div className="home-project">
          <Link className="button" to="/projects">See projects <FaLongArrowAltRight/></Link>
        </div>
      </div>
      
      <h2>
        About me
      </h2>

      <p className="home__about__text">
        While working as a field technician, I falled in love with the code and started to learn it.<br/>
        I learned it as a self taught with the help of mainly Free Code Camp.<br/>
        I did several certification for frontend and backend
      </p>
      
      
      
      <Link className="button" to="/about">Learn more <FaLongArrowAltRight/></Link>
      
       <Contact />
</div>
    )
}

export default Home;



