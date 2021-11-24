import React from "react";
import Stack from "./Stack";
import Header from './Header';
import Contact from './Contact';
import StackCard from "./StackCard";
import {
  Link
} from "react-router-dom";

const Home = ()=>{

    const archiProjectManager = {
      "name": "ArchiProjectManager",
      "description": "ArchiProjectManager is a Saas that has been build to help Architects to manage theirs projects",
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
      <div className="top__profilePicture">
        <img src="./img/anthoVDO.jpg" alt="antho's profile"  className="top__profilePicture__picture"/>
      </div>
      <Contact />
      </div>
      
      

      <h2 className="home-h2">I'm building fullstack websites with
      <img src="/icons/react.svg" alt="React JS logo" width="25px" height="25px" className="home-h2-stack"/> 
      <img src="/icons/nodejs.svg" alt="Node JS logo" width="25px" height="25px" className="home-h2-stack"/> 
      <img src="/icons/csharp.svg" alt="React JS logo" width="25px" height="25px" className="home-h2-stack"/> 
      <img src="/icons/dotnet.svg" alt="React JS logo" width="25px" height="25px" className="home-h2-stack"/>
        </h2>
      <div className="home-mainProject">
        <StackCard 
          element={archiProjectManager}
          addClass="home-mainProject"
         />
      </div>
      <div className="home-project">
      <Link className="button" to="/projects">More projects</Link>
      </div>
      <p>
        While working as a field technician, I falled in love with the code and started to learn it.
      </p>
      <p>
        I learned it as a self taught with the help of mainly Free Code Camp.
      </p>
      <Stack />
      
      <Link className="button" to="/about">About</Link>
      
      
</div>
    )
}

export default Home;



