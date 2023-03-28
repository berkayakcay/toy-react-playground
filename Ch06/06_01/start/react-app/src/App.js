import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


function GithubUser(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        {props.location}
      </p>
      <img src={props.avatar_url} height={150} alt={props.name} />
    </div>
  )
}


function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/berkayakcay`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar_url={data.avatar_url} />);
  }
  return (
    <h1>Data</h1>
  );
}

export default App;
