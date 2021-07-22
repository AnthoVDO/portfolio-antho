import React from 'react';

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


    return (
        <div className={myClass} onMouseEnter={showTheCardInfo} onMouseLeave={hiddeTheCardInfo}>
        <div className={nestedClass}>
        

        <h4 className="project__stack__card__name">{props.element.name}</h4>
        <img src={cleanUrlToGetTheScreenShot(props.element.link)} alt="" />
        <h5 className="project__stack__card__technologie">Made with: {props.element.technologie}</h5>

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