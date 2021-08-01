import React from 'react';
import Icon from './Icon.js';

const StackCard = (props) => {

    const cleanUrlToGetTheScreenShot = (e)=> {

        const vercel = /\.vercel\.app\//;
        const heroku = /\.herokuapp\.com\//;
        const https = /https:\/\//;
        const path = e.replace(vercel, "").replace(heroku, "").replace(https, "");
        return "./screenshot-small/"+path+".png"
    }

    const myClass = props.addClass
    const nestedClass = props.addClass+"__item"

    /* Mouse hover the card */

    const showTheCardInfo = (e) => {
        const element = e.currentTarget.firstChild.querySelector(".project__stack__card__a");
        element.className = "project__stack__card__a active"
    }

    const hiddeTheCardInfo = (e) => {
        const element = e.currentTarget.firstChild.querySelector(".project__stack__card__a");
        element.className = "project__stack__card__a"
    } 
    
    const path = "./icons/"
    const extension = ".svg"

   const stackList = {
        html:{
            src:`${path}html-5${extension}`,
            alt: "html 5 logo",
            href:"https://fr.wikipedia.org/wiki/HTML5"
        },css3:{
            src:`${path}css-3${extension}`,
            alt: "css3 logo",
            href:"https://developer.mozilla.org/en/docs/Web/CSS"
        },sass:{
            src:`${path}sass${extension}`,
            alt: "sass logo",
            href:"https://sass-lang.com/"
        },bootstrap:{
            src:`${path}bootstrap${extension}`,
            alt: "Bootstrap logo",
            href:"https://getbootstrap.com/"
        },javascript:{
            src:`${path}javascript${extension}`,
            alt: "javascript logo",
            href:"https://developer.mozilla.org/fr/docs/Web/JavaScript"
        },d3:{
            src:`${path}d3${extension}`,
            alt: "d3 logo",
            href:"https://d3js.org/"
        },react:{
            src:`${path}react${extension}`,
            alt: "React.js logo",
            href:"https://fr.reactjs.org/"
        },redux:{
            src:`${path}redux${extension}`,
            alt: "redux.js logo",
            href:"https://redux.js.org/"
        },node:{
            src:`${path}nodejs${extension}`,
            alt: "node.js logo",
            href:"https://nodejs.org/en/"
        },express:{
            src:`${path}express${extension}`,
            alt: "express.js logo",
            href:"https://expressjs.com/en/"
        },pug:{
            src:`${path}pug${extension}`,
            alt: "pug logo",
            href:"https://pugjs.org/api/getting-started.html"
        },mongodb:{
            src:`${path}mongodb-icon${extension}`,
            alt: "mongodb logo",
            href:"https://www.mongodb.com/"
        },
    }

       console.log(props.element.technologie)
       
    


    return (
        <div className={myClass} onMouseEnter={showTheCardInfo} onMouseLeave={hiddeTheCardInfo}>
        <div className={nestedClass}>
        

        <h4 className="project__stack__card__name">{props.element.name}</h4>
        <img 
        src={cleanUrlToGetTheScreenShot(props.element.link)} 
        alt="" 
        className="item__preview"  
        />
        <h5 className="project__stack__card__technologie">{
            
            Object.entries(props.element.technologie).map(element=>{
                
              return (
                  <Icon 
                  href={stackList[element[1]].href} 
                  alt={stackList[element[1]].alt} 
                  src={stackList[element[1]].src}
                  width="20px"
                  height="20px"


                  />
              )
              
            })
            }</h5>

        <div className="project__stack__card__a">
            <p className="project__stack__card__description">{props.element.description}</p>
            <a href={props.element.link} target="_blank" rel="noreferrer noopener"  className="project__stack__card__a__link">Link</a>
            <a href={props.element.github} target="_blank" rel="noreferrer noopener"  className="project__stack__card__a__github">Github</a>
        </div>

        </div>
        </div>
    );
};

export default StackCard;