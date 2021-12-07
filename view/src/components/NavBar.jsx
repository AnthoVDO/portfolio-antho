import React from 'react';
import {
    Link,
  } from "react-router-dom";
import { useState} from 'react';
import { Outlet } from "react-router-dom";

const NavBar = () => {


    const [activeHamburgerMenu, setActiveHamburgerMenu] = useState(false);

    return (

        <>
      
      <nav className="navBar">

      <div onClick={()=>{setActiveHamburgerMenu(!activeHamburgerMenu)}}>
        <span className={activeHamburgerMenu ? "hamburger__menu hamburger__menu--active" : "hamburger__menu "} ></span>
      </div>
      


      <ul className={activeHamburgerMenu ? "navBar-container openNav" : "navBar-container"}>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <Link to="/">Home</Link>
      </li>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <Link to="/projects">Projects</Link>
      </li>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <Link to="/about">About</Link>
      </li>
      <li className="navBar-item" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <Link to="/contact">Contact</Link>
      </li>
      {/* <li className="navBar-item navBar-cv" onClick={()=>{setActiveHamburgerMenu(false)}}>
        <a href="/CV" >Download CV</a>
      </li> */}
      </ul>
      <ul>
        
      </ul>

      
      
      </nav>
      <Outlet />
      </>
    );
};

export default NavBar;