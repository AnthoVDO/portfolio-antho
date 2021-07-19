import React, { useEffect, useState } from 'react';
import StackCard from './StackCard';
const axios = require('axios');

const Projects = () => {

    const url = "http://localhost:8080/api/v1/portfolio";
    const [projects, setProjects] = useState([]);

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

    

    

    return (
        <div className="project" >
        <h3 className="project__stack__title">Front end projects</h3>
        <div className="project__stack project__frontend">
            
                {
                projects.map(e=>{
                  if(e.stack === "FrontEnd") return <StackCard element={e} />
                  else{
                      return null
                  }
                })
            
            }
        </div>
        <h3 className="project__stack__title">Back end projects</h3>
        <div className="project__stack">
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
        <div className="project__stack">
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