import logo from './logo.svg';
import './App.css';
import { Two } from './Too';
import Hehe from "./Too"

function One() {
  return <div>Chao ban</div>;
}

//create component too in another file

function App() {
  return (
    <div className="Container">
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello PNV26
        </a>
        <One></One>
        <Two></Two>
        <Hehe/>
      </header>
    </div>
    </div>
  );
}

export default App;
