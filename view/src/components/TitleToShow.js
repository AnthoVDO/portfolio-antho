import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const TitleToShow = (props) => {


    useEffect(()=>{

        window.addEventListener('load', function() { 
            AOS.init({
            duration: 2000,
            offset:150,
            }
            
        ) 
        console.log("aos init")
    });

    }, []);


    return (
        <h3 
        data-aos="fade-up"
        className={props.specialClass}>
        {props.text}
        </h3>
    );
};

export default TitleToShow;