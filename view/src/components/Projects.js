import React, { useEffect, useState } from 'react';
import StackCard from './StackCard';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const axios = require('axios');
        


const Projects = () => {

    const url = "http://localhost:8080/api/v1/portfolio";
    const [projects, setProjects] = useState([]);

    // Call the API to get the projects

    const getProject = async () => {
        try{
            const response = await axios.get(url);
            setProjects(response.data)
        }catch(e){
            console.log("Fail to fetch data from back end project: "+e);
        }
    }

    
    

    // Create the slideshow for the frontend

    class SlideShow {
        constructor(element, options = {}){
            this.element = element
            this.options = Object.assign({}, {
                slidesToScroll: 1,
                slidesVisibles: 1
            }, options)

            this.children = [].slice.call(element.children)
            this.container = element.firstElementChild;
            
            
            let item = this.container.children;
            
            this.items = item
            this.setStyle()
            this.createNavigation()
        }

        setStyle () {
        let ratio = this.container.children.length / this.options.slidesVisibles
        this.container.style.width = (ratio*100) + "%"
        Array.from(this.items).forEach(e=>e.style.width = ((100/this.options.slidesVisibles) / ratio) + "%")
        }

        createNavigation() {
            console.log(this.element)
            let prevButton = Array.from(this.element).filter(e=> e.className === "prevButton")
            let nextButton = Array.from(this.element).filter(e=> e.className === "nextButton")
            console.log(prevButton);
            console.log(nextButton);
        }
    }

    


    useEffect(async ()=>{
        
        
        await getProject();
        await new SlideShow(document.querySelector(".project__frontend"), {
        slidesToScroll: 3,
        slidesVisibles: 3
    })


    },[])



    

    return (
        <div className="project" >
        <h3 className="project__stack__title">Front end projects</h3>
        <div className="project__stack project__frontend">
        
        <div className="project__frontend__slideshow">
            {
                projects.map(e=>{
                  if(e.stack === "FrontEnd") return <StackCard element={e} addClass='project__frontend__slideshow__itemContainer'/>
                  else{
                      return null
                  }
                })
            
                }
        </div>
         <button className="left__frontend prevButton"> <FaArrowCircleLeft/> </button> 
         <button className="right__frontend nextButton"> <FaArrowCircleRight/> </button>   
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