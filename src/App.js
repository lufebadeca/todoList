import logo from './logo.svg';
import './App.css';
import ListItem from './listItem';
import { Counter } from './counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <ListItem name={"grocery list"} number={10} ></ListItem>

        <Counter></Counter>

      </header>

    </div>
  );
}

export default App;
