import React from 'react';

const StackCard = (props) => {
    return (
        <div className="project__stack__card">
        <h4 className="project__stack__card__name">{props.element.name}</h4>
        <p className="project__stack__card__description">{props.element.description}</p>
        <h5 className="project__stack__card__technologie">Made with: {props.element.technologie}</h5>
        <a href={props.element.link} target="_blank" rel="noreferrer noopener"  className="project__stack__card__link">Check the project</a>
        <a href={props.element.github} target="_blank" rel="noreferrer noopener"  className="project__stack__card__github">Check the repo</a>
        </div>
    );
};

export default StackCard;