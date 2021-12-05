import React from 'react';
import "../../public/icons/react.svg"
import Icon from './Icon.jsx';

const Stack = () => {
    const path = "./icons/"
    const extension = ".svg"

   const stackList = {
        html:{
            src:`${path}html-5${extension}`,
            alt: "html 5 logo",
            href:"https://fr.wikipedia.org/wiki/HTML5"
        },css3:{
            src:`${path}css-3${extension}`,
            alt: "css3 logo",
            href:"https://developer.mozilla.org/en/docs/Web/CSS"
        },sass:{
            src:`${path}sass${extension}`,
            alt: "sass logo",
            href:"https://sass-lang.com/"
        },bootstrap:{
            src:`${path}bootstrap${extension}`,
            alt: "Bootstrap logo",
            href:"https://getbootstrap.com/"
        },javascript:{
            src:`${path}javascript${extension}`,
            alt: "javascript logo",
            href:"https://developer.mozilla.org/fr/docs/Web/JavaScript"
        },d3:{
            src:`${path}d3${extension}`,
            alt: "d3 logo",
            href:"https://d3js.org/"
        },react:{
            src:`${path}react${extension}`,
            alt: "React.js logo",
            href:"https://fr.reactjs.org/"
        },
        // redux:{
        //     src:`${path}redux${extension}`,
        //     alt: "redux.js logo",
        //     href:"https://redux.js.org/"
        // },
        node:{
            src:`${path}nodejs${extension}`,
            alt: "node.js logo",
            href:"https://nodejs.org/en/"
        },express:{
            src:`${path}express${extension}`,
            alt: "express.js logo",
            href:"https://expressjs.com/en/"
        },
        // pug:{
        //     src:`${path}pug${extension}`,
        //     alt: "pug logo",
        //     href:"https://pugjs.org/api/getting-started.html"
        // },
        mongodb:{
            src:`${path}mongodb-icon${extension}`,
            alt: "mongodb logo",
            href:"https://www.mongodb.com/"
        },git:{
            src:`${path}git${extension}`,
            alt:"git logo",
            href:"https://git-scm.com/"
        }, github:{
            src:`${path}github${extension}`,
            alt:"github logo",
            href:"https://github.com/"
        }, csharp:{
            src:`${path}csharp${extension}`,
            alt:"c sharp logo",
            href:"https://docs.microsoft.com/en-us/dotnet/csharp/"
        }, dotnet:{
            src:`${path}dotnet${extension}`,
            alt:"dotnet logo",
            href:"https://dotnet.microsoft.com/"
        }
    }


    return (
        <div className="stack">
        {
            Object.entries(stackList).map(element =>{
                return (
                    <Icon 
                    href={element[1].href} 
                    alt={element[1].alt} 
                    src={element[1].src} 
                    width='25px'
                    height="25px"
                    key={element[1].alt+"reactKeyStack"}

                    />
                )
                
            })
        }

            
        </div>
    );
};

export default Stack;