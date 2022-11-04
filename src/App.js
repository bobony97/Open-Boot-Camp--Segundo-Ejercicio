import logo from './logo.svg';
import './App.css';
import Prueba from "./components/prueba.jsx";
import Clock from "./components/clock"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Prueba></Prueba> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
