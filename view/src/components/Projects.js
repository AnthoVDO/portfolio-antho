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

    
    

    // Create the slideshow class

    class SlideShow {
        constructor(element, options = {}){
            this.element = element
            this.options = Object.assign({}, {
                slidesToScroll: 1,
                slidesVisibles: 1,
                parentClass:null
            }, options)

            this.children = [].slice.call(element.children)
            this.currentItem = 0;
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
            let prevButton = document.querySelector(this.options.parentClass+" .prevButton");
            let nextButton = document.querySelector(this.options.parentClass+" .nextButton");
            prevButton.addEventListener("click", this.next.bind(this))
            nextButton.addEventListener("click", this.prev.bind(this))
        }

        next(){
            this.gotoItem(this.currentItem + this.options.slidesToScroll)
        }

        prev(){
            this.gotoItem(this.currentItem - this.options.slidesToScroll)
        }

        gotoItem(index){

            if(index>0){
                if(index>0+this.options.slidesToScroll-1){
                    index = this.items.length - this.options.slidesVisibles;
                index = -index
                }else{
                    index = 0;
                }   
            }
            if(index<-this.items.length+this.options.slidesVisibles){
                if(index<-this.items.length+1){
                    index = 0
                }else{
                    index= -this.items.length + this.options.slidesVisibles;
                }
            }
            let translateX = index * 100 / this.items.length
            this.container.style.transform = 'translate3d('+ translateX +'%, 0,0)'
            this.currentItem = index;
        }




    }

    


    useEffect(async ()=>{
        
        
        await getProject();
        /* create slideshow frontend */
        await new SlideShow(document.querySelector(".project__frontend"), {
        slidesToScroll: 3,
        slidesVisibles: 3,
        parentClass: ".project__frontend"
    })

        /* creat slideshow backend */
        await new SlideShow(document.querySelector(".project__backend"), {
            slidesToScroll: 3,
            slidesVisibles: 3,
            parentClass: ".project__backend"
        })


    },[])



    

    return (
        <div className="project" >

        {/* front end */}

        <h3 className="project__stack__title">Front end projects</h3>
        <div className="project__stack project__frontend slideshow">
            <div className="project__frontend__slideshow slideshow__container">
                {
                    projects.map(e=>{
                    if(e.stack === "FrontEnd") return <StackCard element={e} addClass='itemContainer'/>
                    else{
                        return null
                    }
                    })
                
                    }
            </div>
            <button className="left__frontend prevButton"> <FaArrowCircleLeft/> </button> 
            <button className="right__frontend nextButton"> <FaArrowCircleRight/> </button>   
        </div>

        {/* Back end */}

        <h3 className="project__stack__title">Back end projects</h3>
        <div className="project__stack project__backend slideshow">
            <div className="project__backend__slideshow slideshow__container">
                {
                    projects.map(e=>{
                    if(e.stack === "BackEnd") return <StackCard element={e} addClass='itemContainer'/>
                    else{
                        return null
                    }
                    })
                
                }
            </div>
            <button className="left__backend prevButton"> <FaArrowCircleLeft/> </button> 
            <button className="right__backend nextButton"> <FaArrowCircleRight/> </button>
        </div>

        {/* Full stack */}

        <h3 className="project__stack__title">Full Stack</h3>
            <div className="project__stack project__fullstack slideshow">
            <div className="project__fullstack__slideshow slideshow__container">
                {
                    projects.map(e=>{
                    if(e.stack === "Full") return <StackCard element={e} addClass='itemContainer'/>
                    else{
                        return null
                    }
                    })
                
                }
            </div>
            
            </div>
        
             
        </div>
    );
};

export default Projects;