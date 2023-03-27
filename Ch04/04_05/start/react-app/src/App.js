import logo from './logo.svg';
import './App.css';


const [firstCity, secondCity] = ["Tokyo", "İstanbul", "Paris"]

console.log(firstCity);
console.log(secondCity);


function App({ library }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello from {library}!</h3>
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
