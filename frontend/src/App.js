import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <h1>Food App</h1>

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
