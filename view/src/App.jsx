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
import React from 'react';


function App() {

   
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
      <Route path="/projects" element={<ProjectsPage />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

      <Route path="/" element={<Home/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
