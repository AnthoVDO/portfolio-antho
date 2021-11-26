import React from 'react';
import StackCard from "./StackCard";

const ProjectsPage = (props) => {


    const projects = [{
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0573"
        },
        "name": "Pomodoro",
        "description": "Pomodoro made for FreeCodeCamp certification",
        "use":"Used to work an amount of time and then take a break. You can set them both",
        "useLink":[],
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
        "use":"Enter the website url you want to short, it return a json with the shortUrl, add the shortUrl value to the URL and it redirect to the desired website",
        "useLink":["./use/urlshortener001.png","urlshortener002.png","./use/urlshortener003.jpg"],
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
        "use":"Markdown changing while typing made with React",
        "useLink":[],
        "link": "https://markdown-previewer-react-freecodecamp.vercel.app/",
        "github": "https://github.com/AnthoVDO/Markdown-previewer-react",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, 
    // {
    //     "_id": {
    //         "$oid": "60f2b3373ee84d15d4fa057e"
    //     },
    //     "name": "Country inhabitant ",
    //     "description": "Country inhabitant made to learn react",
    //     "link": "https://country-inhabitants-react-js.vercel.app/",
    //     "github": "https://github.com/AnthoVDO/country-inhabitants-ReactJs",
    //     "technologie": [
    //         "react"
    //     ],
    //     "stack": "FrontEnd"
    // },
     {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0576"
        },
        "name": "Heat map with D3",
        "description": "Heat map made for FreeCodeCamp certification",
        "use":"Heat map made with D3 to show the differents temperature over the years. You can over a section to have more info",
        "useLink":[],
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
        "use":"Todo app made with react. Allow to add task, drag and drop, checked task done, filter them and clear completed, night and day mode",
        "useLink":[],
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
        "use":"Simple calculator made with React",
        "useLink":[],
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
        "use":"Bar chart made with D3js to show the Gross Domestic Product in Billion of Dollars. You can hover the bar to have more info",
        "useLink":[],
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
        "use":"Used to generate a random quote and give the possibility to share it on tweeter",
        "useLink":[],
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
        "use":"Example of a pricing page with the possibility to choose the price and get reduction if we take yearly billing",
        "useLink":[],
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
        "use":"Landing page made to train",
        "useLink":["./use/tasktraquer001.png"],
        "link": "https://front-end-mentor-loop-studio.vercel.app/",
        "github": "https://github.com/AnthoVDO/Front_End_Mentor--Challenge/tree/master/loopstudios-landing-page-main",
        "stack": "FrontEnd",
        "technologie": [
            "html",
            "css3",
            "javascript"
        ]
    }, 
    // {
    //     "_id": {
    //         "$oid": "60f2b3373ee84d15d4fa057d"
    //     },
    //     "name": "Task tracker",
    //     "description": "Task tracker made to learn react",
    //     "link": "https://task-tracker-react.vercel.app/",
    //     "github": "https://github.com/AnthoVDO/task-tracker-react",
    //     "technologie": [
    //         "react"
    //     ],
    //     "stack": "FrontEnd"
    // }
     {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0580"
        },
        "name": "Restaurant review",
        "description": "MERN App that list the differents restaurant and give possibility to add review",
        "use":"Website to post review. You can see the review per restaurant, add a review, modify it and delete it. You can also click to see the restaurant on the map and filter by name or zip code",
        "useLink":["./use/restaurant-review001.png","./use/restaurant-review002.png","./use/restaurant-review003.png","./use/restaurant-review004.png","./use/restaurant-review005.png","./use/restaurant-review006.png","./use/restaurant-review007.png","./use/restaurant-review008.png","./use/restaurant-review009.png","./use/restaurant-review010.png","./use/restaurant-review011.png","./use/restaurant-review012.png","./use/restaurant-review013.png","./use/restaurant-review014.png","./use/restaurant-review015.png","./use/restaurant-review016.png","./use/restaurant-review017.png","./use/restaurant-review018.png","./use/restaurant-review019.png","./use/restaurant-review020.png"],
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
        "use":"1) Create a user by adding a username </br> 2) Take the id and add your exercice with a description, a time and a date </br> 3) Check the log by adding your Id to the Url",
        "useLink":["./use/exercices-tracker001.png","./use/exercices-tracker002.png","./use/exercices-tracker003.png","./use/exercices-tracker004.png","./use/exercices-tracker005.png","./use/exercices-tracker006.png"],
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
        "use":"Scatter plot showing the Professional cycling’s 35 fastest times ever up Alpe d’Huez over the years and doping accusation. You can hover the plot to have more info",
        "useLink":[],
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
        "use":"Treemap show the top video game sale per platform. The more they sell, the bigger they are",
        "useLink":[],
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
        "use":"Drum machine made with React, we can turn it on/off, play piano, drum and Duke nukem sound (Video game character)",
        "useLink":[],
        "link": "https://drum-machine-react-freecodecamp-anthovdo.vercel.app/",
        "github": "https://github.com/AnthoVDO/drum-machine-react-freecodecamp",
        "technologie": [
            "react"
        ],
        "stack": "FrontEnd"
    }, 
    // {
    //     "_id": {
    //         "$oid": "60f2b3373ee84d15d4fa0585"
    //     },
    //     "name": "FileMetaData",
    //     "description": "FileMetaData made for FreeCodeCamp Back end certification (check branch work5)",
    //     "link": "https://fcc-vs-filemetadata.herokuapp.com/",
    //     "github": "https://github.com/AnthoVDO/boilerplate-project-filemetadata/tree/work5",
    //     "technologie": [
    //         "node",
    //         "express",
    //         "mongodb"
    //     ],
    //     "stack": "BackEnd"
    // }, 
    {
        "_id": {
            "$oid": "60f2b3373ee84d15d4fa0582"
        },
        "name": "HeaderParser",
        "description": "HarderParser made for FreeCodeCamp Back end certification (check branch work2)",
        "use":"Click on the exemple URL and you will be redirected to a JSON which contain your IP adresse, language and software",
        "useLink":["./use/headerparser001.png","./use/headerparser002.png"],
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
        "use":"Map showing the percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)",
        "useLink":[],
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
        "use":"Job board made with React, allow to click on differents tags to filter the jobs",
        "useLink":["./use/static-job-list001.png","./use/static-job-list002.png","./use/static-job-list003.png","./use/static-job-list004.png"],
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
        "use":"Add the date to the URL and you will be redirected to a JSON with the UTC and Unix date",
        "useLink":["./use/timestamp001.png","./use/timestamp002.png"],
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
        "use":"It has been build with C#/.Net Razor pages and Bootstrap. I'm working on it and there are thoses features: You can login, logout, create an account. While inside, you can create your clients, manage them with a CRUD. After that, you can create a project according to a client and then manage the project as you want. Both client and project dashboard have tool to find them like differents sorting, filter by word or filter by project phase.",
        "useLink":["./use/archiprojectmanager.png","./use/archiprojectmanager002.png","./use/archiprojectmanager003.png","./use/archiprojectmanager04.png","./use/archiprojectmanager05.png","./use/archiprojectmanager06.png","./use/archiprojectmanager07.png"],
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