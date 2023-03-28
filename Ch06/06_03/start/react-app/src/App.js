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
  const [error, setError] = useState(null);
  const [loaging, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/berkayakcay`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loaging) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>
  }
  if (!data) {
    return null
  }

  return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar_url={data.avatar_url} />);

}

export default App;
