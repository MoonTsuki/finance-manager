import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage.js";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage.js";
import React from "react";

function App() {
  // maybe keep for routing?
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
