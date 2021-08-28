import React from 'react';

const icon = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer noopener" ><img src={props.src} alt={props.alt} width={props.width} height={props.height} className="stack__icon"/></a>
    );
};

export default icon;