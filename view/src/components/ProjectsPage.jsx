import React from 'react';
import StackCard from "./StackCard";

const ProjectsPage = () => {


    const projects = [{
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0573"
        },
        "name": "Pomodoro",
        "description": "Pomodoro made for FreeCodeCamp certification",
        "link": "https://pomodoro-react-freecodecamp-anthovdo.vercel.app/",
        "github": "https://github.com/AnthoVDO/pomodoro-react-freecodecamp",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0581"
        },
        "name": "URLShortener",
        "description": "UrlShortener made for FreeCodeCamp Back end certification (check branch work3)",
        "link": "https://fcc-api-ms-urlshortener.herokuapp.com/",
        "github": "https://github.com/AnthoVDO/boilerplate-project-urlshortener/tree/work3",
        "technologie": [
            "node",
            "express",
            "mongodb"
        ],
        "stack": "BackEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0570"
        },
        "name": "Markdown previewer",
        "description": "Markdown previewer made for FreeCodeCamp certification",
        "link": "https://markdown-previewer-react-freecodecamp.vercel.app/",
        "github": "https://github.com/AnthoVDO/Markdown-previewer-react",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa057e"
        },
        "name": "Country inhabitant ",
        "description": "Country inhabitant made to learn react",
        "link": "https://country-inhabitants-react-js.vercel.app/",
        "github": "https://github.com/AnthoVDO/country-inhabitants-ReactJs",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0576"
        },
        "name": "Heat map with D3",
        "description": "Heat map made for FreeCodeCamp certification",
        "link": "https://fcc-data-visualisation-heat-map.vercel.app/",
        "github": "https://github.com/AnthoVDO/FCC-DataVisualisation-HeatMap",
        "technologie": [
            "d3"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0579"
        },
        "name": "To do app",
        "description": "To do app made for Front end mentor challenge",
        "link": "https://to-do-app-react-front-end-mentor-challenge.vercel.app/",
        "github": "https://github.com/AnthoVDO/ToDo-app-React__FrontEndMentor-challenge",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0572"
        },
        "name": "Calculator",
        "description": "Calculator made for FreeCodeCamp certification",
        "link": "https://javascript-calculator-react-freecodecamp.vercel.app/",
        "github": "https://github.com/AnthoVDO/javascript-calculator-react-freecodecamp",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0574"
        },
        "name": "Bar chart with D3",
        "description": "Bar chart made for FreeCodeCamp certification",
        "link": "https://fcc-data-visualisation-bar-chart.vercel.app/",
        "github": "https://github.com/AnthoVDO/FCC-DataVisualisation-BarChart",
        "technologie": [
            "d3"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa056f"
        },
        "name": "Random quote machine",
        "description": "Random quote made for FreeCodeCamp certification",
        "link": "https://random-quote-machine-react-freecodecamp.vercel.app/",
        "github": "https://github.com/AnthoVDO/Random-quote-machine__React",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa057a"
        },
        "name": "Interactive pricing component",
        "description": "Interactive pricing component made for Front end mentor challenge",
        "link": "https://interactive-pricing-component-chi.vercel.app/",
        "github": "https://github.com/AnthoVDO/Front_End_Mentor--Challenge/tree/master/interactive-pricing-component-main",
        "stack": "FrontEnd",
        "technologie": [
            "html",
            "css3",
            "javascript"
        ]
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa057b"
        },
        "name": "Loop studio",
        "description": "Loop studio made for Front end mentor challenge",
        "link": "https://front-end-mentor-loop-studio.vercel.app/",
        "github": "https://github.com/AnthoVDO/Front_End_Mentor--Challenge/tree/master/loopstudios-landing-page-main",
        "stack": "FrontEnd",
        "technologie": [
            "html",
            "css3",
            "javascript"
        ]
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa057d"
        },
        "name": "Task tracker",
        "description": "Task tracker made to learn react",
        "link": "https://task-tracker-react.vercel.app/",
        "github": "https://github.com/AnthoVDO/task-tracker-react",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0580"
        },
        "name": "Restaurant review",
        "description": "MERN App that list the differents restaurant and give possibility to add review",
        "link": "https://restaurant-review-seven.vercel.app/",
        "github": "https://github.com/AnthoVDO/restaurant-review",
        "technologie": [
            "react",
            "node",
            "bootstrap",
            "mongodb"
        ],
        "stack": "Full"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0584"
        },
        "name": "ExercicesTracker",
        "description": "Exercices tracker made for FreeCodeCamp Back end certification (check branch work4)",
        "link": "https://fcc-api-ms-exercices-tracker.herokuapp.com/",
        "github": "https://github.com/AnthoVDO/boilerplate-project-exercisetracker/tree/work4",
        "technologie": [
            "node",
            "express",
            "mongodb"
        ],
        "stack": "BackEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0575"
        },
        "name": "Scatter plot with D3",
        "description": "Scatter plot made for FreeCodeCamp certification",
        "link": "https://fcc-data-visualisation-scatter-plot.vercel.app/",
        "github": "https://github.com/AnthoVDO/FCC-DataVisualisation-ScatterPlot",
        "technologie": [
            "d3"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0578"
        },
        "name": "Treemap with D3",
        "description": "Treemap made for FreeCodeCamp certification",
        "link": "https://fcc-data-visualisation-treemap.vercel.app/",
        "github": "https://github.com/AnthoVDO/FCC-DataVisualisation-treemap",
        "technologie": [
            "d3"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0571"
        },
        "name": "Drum machine",
        "description": "Drum machine made for FreeCodeCamp certification",
        "link": "https://drum-machine-react-freecodecamp-anthovdo.vercel.app/",
        "github": "https://github.com/AnthoVDO/drum-machine-react-freecodecamp",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0585"
        },
        "name": "FileMetaData",
        "description": "FileMetaData made for FreeCodeCamp Back end certification (check branch work5)",
        "link": "https://fcc-vs-filemetadata.herokuapp.com/",
        "github": "https://github.com/AnthoVDO/boilerplate-project-filemetadata/tree/work5",
        "technologie": [
            "node",
            "express",
            "mongodb"
        ],
        "stack": "BackEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0582"
        },
        "name": "HeaderParser",
        "description": "HarderParser made for FreeCodeCamp Back end certification (check branch work2)",
        "link": "https://fcc-api-ms-headerparser.herokuapp.com/",
        "github": "https://github.com/AnthoVDO/boilerplate-project-headerparser/tree/work2",
        "technologie": [
            "node",
            "express",
            "mongodb"
        ],
        "stack": "BackEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0577"
        },
        "name": "Choropleth with D3",
        "description": "Choropleth made for FreeCodeCamp certification",
        "link": "https://fcc-data-visualisation-choropleth-map.vercel.app/",
        "github": "https://github.com/AnthoVDO/FCC-DataVisualisation-ChoroplethMap",
        "technologie": [
            "d3"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa057c"
        },
        "name": "Static job list",
        "description": "Static job list made for Front end mentor challenge",
        "link": "https://static-job-list-in-react.vercel.app/",
        "github": "https://github.com/AnthoVDO/Front_End_Mentor--Challenge/tree/master/static-job-listings-react",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0583"
        },
        "name": "TimeStamp",
        "description": "TimeStamp made for FreeCodeCamp Back end certification (check branch work1)",
        "link": "https://fcc-api-microservice-timestamp.herokuapp.com/",
        "github": "https://github.com/AnthoVDO/boilerplate-project-timestamp/tree/work1",
        "technologie": [
            "node",
            "express",
            "mongodb"
        ],
        "stack": "BackEnd"
    }, {
        "name": "ArchiProjectManager",
        "description": "ArchiProjectManager is a Saas that has been build to help Architects to manage theirs projects",
        "link": "https://archiprojectmanager.azurewebsites.net/",
        "github": "https://github.com/AnthoVDO/ArchiProjectManager",
        "technologie": [
            "bootstrap",
            "csharp",
            "dotnet"
        ],
        "stack": "Full"
    }]





    return (
        <div className="container" >
            
            <h1 className="ProjectsPage-title">Projects</h1>
            <h2 className="ProjectsPage-subTitle">Full Stack</h2>
            <div className="ProjectPage-projects">

            
            {
                projects.map(p=>{
                    if(p.stack==="Full"){
                       return( 
                    
                    <StackCard 
                    element={p}
                    addClass="ProjectPage-projects-items"
                    />
                    
                    )
                    }else{
                       return null
                    }
                })
            }

            </div>
            <h2 className="ProjectsPage-subTitle">Front End</h2>
            <div className="ProjectPage-projects">


            {
                projects.map(p=>{
                    if(p.stack==="FrontEnd"){
                       return( 
                        
                           <StackCard 
                    element={p}
                    addClass="ProjectPage-projects-items"
                    />
                    
                    
                    )
                    }else{
                       return null
                    }
                })
            }
</div>
            <h2 className="ProjectsPage-subTitle"> Back end</h2>
            <div className="ProjectPage-projects">


            {
                projects.map(p=>{
                    if(p.stack==="BackEnd"){
                       return( 
                           
                        
                           <StackCard 
                    element={p}
                    addClass="ProjectPage-projects-items"
                    />
                    
                    )
                    }else{
                       return null
                    }
                })
            }

</div>
        </div>
    );
};

export default ProjectsPage;