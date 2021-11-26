import Icon from './Icon.jsx';
import ProjectModal from './ProjectModal.jsx';
import React, {useState, useEffect} from 'react';

const StackCard = (props) => {

    const cleanUrlToGetTheScreenShot = (e)=> {

        const vercel = /\.vercel\.app\//;
        const heroku = /\.herokuapp\.com\//;
        const azure = /\.azurewebsites\.net\//;
        const https = /https:\/\//;
        const path = e.replace(vercel, "").replace(heroku, "").replace(https, "").replace(azure, "");
        return "./screenshot-small/"+path+".png"
    }

    const myClass = props.addClass
    const nestedClass = props.addClass+"__item"

    
    
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
        },csharp:{
            src:`${path}csharp${extension}`,
            alt:"c sharp logo",
            href:"https://docs.microsoft.com/en-us/dotnet/csharp/"
        }, dotnet:{
            src:`${path}dotnet${extension}`,
            alt:"dotnet logo",
            href:"https://dotnet.microsoft.com/"
        }
    }

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if(modalShow){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll';
        }
    }, [modalShow])
    
    
       
    


    return (
        <div className={myClass} >
        <div className={nestedClass+" project__stack__card__item"}>
        
            <div className="project__stack__card__header">
                <div className="project__stack__card__name">
                    <span className="project__stack__card__name-red">*</span>
                    <span className="project__stack__card__name-orange">*</span>
                    <span className="project__stack__card__name-green">*</span>
                    <h4 className="project__stack__card__name-title">{props.element.name}</h4> 
                </div>
                

                <span className="project__stack__card__technologie">{
                    
                    Object.entries(props.element.technologie).map(element=>{
                        
                    return (
                        <Icon 
                        href={stackList[element[1]].href} 
                        alt={stackList[element[1]].alt} 
                        src={stackList[element[1]].src}
                        width="20px"
                        height="20px"
                        key={stackList[element[1]].alt+"reactKeyStack"+props.element.name}


                        />
                    )
                    
                    })
                    }
                </span>
            </div>
            <img 
            src={cleanUrlToGetTheScreenShot(props.element.link)} 
            alt="" 
            className="item__preview"  
            />
       
            <p className="project__stack__card__description">{props.element.description}</p>
            <div className="project__stack__card__a">
                <a href={props.element.link} target="_blank" rel="noreferrer noopener"  className="project__stack__card__a__link">Link</a>
                <button onClick={()=>{setModalShow(true)}}>More info</button>
                <a href={props.element.github} target="_blank" rel="noreferrer noopener"  className="project__stack__card__a__github">Github</a>
            </div>
        

        </div>
        < ProjectModal modalShow={modalShow}
        onClose={()=>{setModalShow(false)}}
        title={props.element.name}
        description={props.element.description}
        use={props.element.use}
        useLink={props.element.useLink}
        link={props.element.link}
        github={props.element.github}
        technologie={props.element.technologie}
        stack={props.element.stack}
        img={cleanUrlToGetTheScreenShot(props.element.link)}

            
         />
        </div>
    );
};

export default StackCard;