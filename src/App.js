import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/dogs">
          <Dogs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
