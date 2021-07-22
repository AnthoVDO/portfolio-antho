import './style/router.scss';
import Stack from "./components/Stack";
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <div className="container">
      <Header/>
      <Stack />
      <Projects/>
      <About/>
      <Contact />
    </div>
    </div>
  );
}

export default App;
