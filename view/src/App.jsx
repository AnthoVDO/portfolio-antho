import './style/router.scss';
import About from './components/About';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React,{ useEffect, useState } from 'react';
const axios = require('axios');


function App() {

   // const url = "http://localhost:8080/api/v1/portfolio";
   const url = "https://anthovdo-s-portfolio.herokuapp.com/api/v1/portfolio"
    const [projects, setProjects] = useState([]);

    
    

    useEffect(()=>{
        
        
        // Call the API to get the projects

    const getProject = async () => {
        
        try{
            const response = await axios.get(url);
            await setProjects(response.data);

            
        }catch(e){
            console.log("Fail to fetch data from back end project: "+e);
        }
    }
        getProject();    
        
    },[])

  return (
    <div className="App" >
    
      <nav className="navBar">
      <ul className="navBar-container">
      <li className="navBar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navBar-item">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="navBar-item">
        <Link to="/about">About</Link>
      </li>
      <li className="navBar-item">
        <Link to="/contact">Contact</Link>
      </li>
      </ul>
      
      
      </nav>
    
    <Routes>
      <Route path="/projects" element={<ProjectsPage projects={projects}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

      <Route path="/" element={<Home/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
