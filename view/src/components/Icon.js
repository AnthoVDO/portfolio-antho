import React from 'react';

const icon = (props) => {
    return (
        <a href={props.href}><img src={props.src} alt={props.alt} width="35px" height="35px"/></a>
    );
};

export default icon;