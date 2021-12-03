import './style/router.scss';
import About from './components/About';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import React from 'react';
import { useState } from 'react/cjs/react.development';


function App() {

  const [activeHamburgerMenu, setActiveHamburgerMenu] = useState(false);

   
  return (
    <Router>
    <div className="App" >
    
      <nav className="navBar">
      <span className={activeHamburgerMenu ? "hamburger__menu hamburger__menu--active" : "hamburger__menu "} onClick={()=>{setActiveHamburgerMenu(!activeHamburgerMenu)}}></span>
      <ul className={activeHamburgerMenu ? "navBar-container openNav" : "navBar-container"}>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      </ul>
      
      
      </nav>
    
    <Routes>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

      <Route path="/" element={<Home/>}/>
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
