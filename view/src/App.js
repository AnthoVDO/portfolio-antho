import './style/router.scss';
import Stack from "./components/Stack";
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Stack />
      <Projects/>
    </div>
  );
}

export default App;
