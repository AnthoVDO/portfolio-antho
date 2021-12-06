import './style/router.scss';
import About from './components/About';
import Home from "./components/Home";
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import NavBar from './components/NavBar';



function App() {

  

   
  return (
    
    <div className="App" >
    
      
    
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} ></Route>
        <Route  exact path="projects" element={<ProjectsPage />} />
        <Route  exact path="about" element={<About />} />
        <Route  exact path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
    
    </div>
    
  );
}

export default App;
