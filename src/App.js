import React from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import Service from "./components/Service";
import Nav from "./components/Nav";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />

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
