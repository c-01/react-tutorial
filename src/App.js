import React, { useState } from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import Service from "./components/Service";
import Nav from "./components/Nav";
import "./App.css";

import Tweet from "./components/Tweet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    { name: "First Name", message: "this is message" },
    { name: "Second Name", message: "this is store" }
  ]);
  //if (true) setRed(true);
  console.log(isRed);

  return (
    <Router>
      <div>
        <Nav />

        {users.map(user => (
          <Tweet key={user.name} name={user.name} message={user.message}/>
        ))}

        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            setRed(!isRed);
          }}
        >
          Click me
        </button>
        <h3>{count}</h3>
        <h5 className={isRed ? "red" : ""}>change color </h5>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/laptop" component={About} />
          <Route path="/phone" component={Shop} />
          <Route path="/others" component={Service} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>This Home page</h1>
    </div>
  );
}

export default App;
