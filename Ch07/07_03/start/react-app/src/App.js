import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
