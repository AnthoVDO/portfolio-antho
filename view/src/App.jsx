import './style/router.scss';
import Stack from "./components/Stack";
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  

  return (
    <div className="App" >
    <div className="container" >
    <div className="top">
      <Header/>

      <div className="top__profilePicture">
        <img src="./img/anthoVDO.jpg" alt="antho's profile"  className="top__profilePicture__picture"/>
      </div>

      
      
      <Contact />
    </div>
      
      <Stack />
      <Projects />
      <About />
      
    </div>
    </div>
  );
}

export default App;
