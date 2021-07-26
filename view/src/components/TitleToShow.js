import React, { useState, useEffect } from 'react';

const TitleToShow = (props) => {

    const [componentPositionPixel, setComponentPositionPixel] = useState(null)

    useEffect(()=>{
        
        console.log(componentPositionPixel);

    }, [])

    const componentPosition = (e) => {
        if(e!=null){
           console.log(props.text+" position :"+e.getBoundingClientRect().top); 
           setComponentPositionPixel(e.getBoundingClientRect().top) ;
        }
        }

    // className={props.specialClass}

    return (
        <h3 className="hiddenComponent" ref={el => {componentPosition(el)}}>
        {props.text}
        </h3>
    );
};

export default TitleToShow;