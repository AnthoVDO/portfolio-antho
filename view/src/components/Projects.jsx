import React, { useEffect, useState } from 'react';
import StackCard from './StackCard';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TitleToShow from './TitleToShow';

const axios = require('axios');
        


const Projects = (props) => {
    
    // const url = "http://localhost:8080/api/v1/portfolio";
    const url = "https://anthovdo-s-portfolio.herokuapp.com/api/v1/portfolio"
    const [projects, setProjects] = useState([]);

    
    

    useEffect(()=>{
        
        
        // Call the API to get the projects

    const getProject = async () => {

        const windowsWidth = window.innerWidth;
        let numberOfSlide;
        if(windowsWidth>1100)numberOfSlide = 3
        else{
        if(windowsWidth > 700)numberOfSlide=2
        else{
            numberOfSlide=1
        }    
        }
        

        try{
            const response = await axios.get(url);
            await setProjects(response.data)

            /* create slideshow frontend */

            await new SlideShow(document.querySelector(".project__frontend"), {
                slidesToScroll: numberOfSlide,
                slidesVisibles: numberOfSlide,
                parentClass: ".project__frontend"
            })
        
                /* creat slideshow backend */
            await new SlideShow(document.querySelector(".project__backend"), {
                    slidesToScroll: numberOfSlide,
                    slidesVisibles: numberOfSlide,
                    parentClass: ".project__backend"
                })
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
        
        
        
        
        
        
        getProject();    
        
    },[])



    

    return (
        <div className="project" >

        {/* front end */}

        < TitleToShow specialClass="project__stack__title" text="Front end projects" />
        <div className="project__stack project__frontend slideshow">
            <div className="project__frontend__slideshow slideshow__container">
                {
                    projects.map(e=>{
                    if(e.stack === "FrontEnd"){
                        return <StackCard element={e} addClass='itemContainer' key={e._id} />
                    } 
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
        
        < TitleToShow specialClass="project__stack__title" text="Back end projects"/>
        <div className="project__stack project__backend slideshow">
            <div className="project__backend__slideshow slideshow__container">
                {
                    projects.map(e=>{
                    if(e.stack === "BackEnd") return <StackCard element={e} addClass='itemContainer' key={e._id}/>
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
        

        < TitleToShow specialClass="project__stack__title" text="Full Stack"/>
            <div className="project__stack project__fullstack slideshow">
            <div className="project__fullstack__slideshow slideshow__container">
                {
                    projects.map(e=>{
                    if(e.stack === "Full") return <StackCard element={e} addClass='itemContainer' key={e._id}/>
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