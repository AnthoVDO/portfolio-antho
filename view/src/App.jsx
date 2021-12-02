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


function App() {

  

   
  return (
    <Router>
    <div className="App" >
    
      <nav className="navBar">
      <ul className="navBar-container">
      <li className="navBar-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navBar-item">
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="navBar-item">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="navBar-item">
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
