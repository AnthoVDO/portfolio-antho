import React from 'react';

const icon = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer noopener" ><img src={props.src} alt={props.alt} width="35px" height="35px" className="stack__icon"/></a>
    );
};

export default icon;