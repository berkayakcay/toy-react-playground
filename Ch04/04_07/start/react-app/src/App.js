import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer } from "react";

const [firstCity, secondCity] = ["Tokyo", "İstanbul", "Paris"]

console.log(firstCity);
console.log(secondCity);





function App() {

  const [emotion, setEmotion] = useState("happy");

  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} rigth now`);
  }, [emotion])


  useEffect(() => {
    console.log(`It's ${secondary} rigth now`);
  }, [])


  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Current emotion is {emotion}</h3>
        <button onClick={() => setEmotion("sad")}>SAD</button>
        <button onClick={() => setEmotion("exited")}>EXITED</button>
        <h3>Secondary emotion is {secondary}</h3>
        <button onClick={() => setSecondary("greatful")}>GREATFUL</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="checkbox" value={checked} onChange={setChecked} />
        <label>{checked ? "checked" : "not checked"}</label>
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
