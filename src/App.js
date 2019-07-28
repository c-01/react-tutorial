import React from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import Service from "./components/Service";
import Nav from './components/Nav';
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Shop />
      <Service />
    </div>
  );
}

export default App;
