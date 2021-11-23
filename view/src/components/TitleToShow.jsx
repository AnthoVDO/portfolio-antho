// import AOS from "aos";
import "aos/dist/aos.css"
// import { useEffect } from "react";

const TitleToShow = (props) => {


    return (
        <h3 
        className={props.specialClass}>
        {props.text}
        </h3>
    );
};

export default TitleToShow;