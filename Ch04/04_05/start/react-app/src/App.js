import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

const [firstCity, secondCity] = ["Tokyo", "İstanbul", "Paris"]

console.log(firstCity);
console.log(secondCity);





function App() {

  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} rigth now`);
  }, [emotion])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Current emotion is {emotion}</h3>
        <button onClick={() => setEmotion("sad")}>SAD</button>
        <button onClick={() => setEmotion("exited")}>EXITED</button>
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
