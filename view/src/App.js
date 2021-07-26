import './style/router.scss';
import Stack from "./components/Stack";
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import {useState, useEffect} from "react";

function App() {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [screenPosition, setScreenPosition] = useState(0);

  useEffect(() => {

      const onScrollDown = (e) => {
      let windowPosition = window.pageYOffset;
      if(windowPosition > scrollTop){
          setScreenPosition(windowPosition);
          setScrolling(false)
      }
      setScrollTop(windowPosition <= 0 ? 0 : windowPosition);
      }

      window.addEventListener('scroll', onScrollDown);
      return () => window.removeEventListener("scroll", onScrollDown)


  }, [scrollTop]);



  return (
    <div className="App" >
    <div className="container" >
      <Header/>
      <Contact />
      <Stack />
      <Projects screenPosition={screenPosition}/>
      <About screenPosition={screenPosition}/>
      
    </div>
    </div>
  );
}

export default App;
