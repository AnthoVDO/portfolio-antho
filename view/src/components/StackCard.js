import React from 'react';

const StackCard = (props) => {

    const cleanUrlToGetTheScreenShot = (e)=> {

        const vercel = /\.vercel\.app\//;
        const heroku = /\.herokuapp\.com\//;
        const https = /https:\/\//;
        const path = e.replace(vercel, "").replace(heroku, "").replace(https, "");
        return "./screenshot-small/"+path+".png"
    }

    const myClass = props.addClass+" project__stack__card"
    const nestedClass = props.addClass+"__item"


    return (
        <div className={myClass}>
        <div className={nestedClass}>
        <img src={cleanUrlToGetTheScreenShot(props.element.link)} alt="" />
        <h4 className="project__stack__card__name">{props.element.name}</h4>
        <p className="project__stack__card__description">{props.element.description}</p>
        <h5 className="project__stack__card__technologie">Made with: {props.element.technologie}</h5>
        <div className="project__stack__card__a">
            <a href={props.element.link} target="_blank" rel="noreferrer noopener"  className="project__stack__card__a__link">Check the project</a>
            <a href={props.element.github} target="_blank" rel="noreferrer noopener"  className="project__stack__card__a__github">Check the repo</a>
        </div>
        </div>
        </div>
    );
};

export default StackCard;