import './App.css';
import MiApi from './components/MiApi';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar brand="Eres fa de Rick y Morty?" />
      <div>
        <MiApi />
      </div>
    </div>
  );
}

export default App;
