import "./App.css";
import { useRef } from "react";

function App() {

  const txtTitle = useRef()
  const hexColor = useRef()


  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title} ${color}`)
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (

    <form onSubmit={submit}>
      <input type="text" ref={txtTitle} placeholder="color title..." />
      <input type="color" ref={hexColor} />
      <button>ADD</button>
    </form>
  );
}

export default App;
