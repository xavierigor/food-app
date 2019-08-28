import React from "react";
import { Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/HomePage";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <GlobalStyles />
    </>
  );
}

export default App;
