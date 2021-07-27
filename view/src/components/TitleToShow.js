import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const TitleToShow = (props) => {


    useEffect(()=>{
        AOS.init({
            duration: 2000,
            offset:300,
            throttleDelay: 1000
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