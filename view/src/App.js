import './style/router.scss';
import Stack from "./components/Stack";
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
    <div className="container">
      <Header/>
      <Stack />
      <Projects/>
    </div>
    </div>
  );
}

export default App;
