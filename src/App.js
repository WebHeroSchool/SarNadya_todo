import logo from './logo.svg';
import './App.css';

const lab = true;
const num = 100;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'aqua'
        }}>
          Hello World!
        </p>
        <p>
          {num}
        </p>
        <p>
          {0}
        </p>
        <p>
          {1+1}
        </p>
        <p>
          {lab && 'lab'}
        </p>
        <p>
          {lab ? 'lab' : 'not lab'}
        </p>
        <p>
          {null}
          {undefined}
          {true}
          {false}
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
