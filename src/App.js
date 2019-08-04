import React from "react";
// import About from "./components/About";
import Categories from "./components/Categories";
// import Service from "./components/Service";
import Nav from "./components/Nav";
import "./App.css";

// import Tweet from "./components/Tweet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DepartmentProvider } from "./ContextApi/DepartmentContext";

function App() {
  return (
    <Router>
      <div>
        <DepartmentProvider>
          <Nav />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/departments/:slug" component={Categories} />
            {/* <Route path="/phone" component={Shop} /> */}
            {/* <Route path="/others" component={Shop} /> */}
          </Switch>
        </DepartmentProvider>
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
