import React, { useEffect, useState } from 'react';
import StackCard from './StackCard';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const axios = require('axios');
        


const Projects = () => {

    const url = "http://localhost:8080/api/v1/portfolio";
    const [projects, setProjects] = useState([]);
    const [slidesVisibles, setSlidesVisibles] = useState([0,1,2]);

    // Call the API to get the projects

    const getProject = async () => {
        try{
            const response = await axios.get(url);
            setProjects(response.data)
        }catch(e){
            console.log("Fail to fetch data from back end project: "+e);
        }
    }

    
    useEffect(()=>{
        
        
        getProject();


    },[])

    // Create the slideshow for the frontend

    const simpleSlideShow = () => {

    }



    

    return (
        <div className="project" >
        <h3 className="project__stack__title">Front end projects</h3>
        <div className="project__stack project__frontend">
        <button className="left__frontend"> <FaArrowCircleLeft/> </button>
            
                {
                projects.map(e=>{
                  if(e.stack === "FrontEnd") return <StackCard element={e} />
                  else{
                      return null
                  }
                })
            
                }

        <button className="right__frontend"> <FaArrowCircleRight/></button>      
        </div>
        <h3 className="project__stack__title">Back end projects</h3>
        <div className="project__stack project__backend">
        {
                projects.map(e=>{
                  if(e.stack === "BackEnd") return <StackCard element={e} />
                  else{
                      return null
                  }
                })
            
            }
        </div>
        <h3 className="project__stack__title">Full Stack</h3>
        <div className="project__stack project__fullstack">
        {
                projects.map(e=>{
                  if(e.stack === "Full") return <StackCard element={e} />
                  else{
                      return null
                  }
                })
            
            }
        </div>
        
             
        </div>
    );
};

export default Projects;