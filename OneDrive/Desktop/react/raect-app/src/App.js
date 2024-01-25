import logo from './logo.svg';
import './App.css';
import Testcomp from './components/functionComponent/testfunction';
import ClassComp from './components/classComponent/testclass';
function App() {
  return (
    <div className="App">
      <ClassComp></ClassComp>
      <header className="App-header">
        <Testcomp></Testcomp>
        <ClassComp></ClassComp>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
