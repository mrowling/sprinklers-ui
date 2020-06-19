import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { sprinklers } from "./config/sprinklers";
import SprinklerButtonGroup from "./components/SprinklerButtonGroup";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import ExternalApi from "./components/ExternalApi";

import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <SprinklerButtonGroup sprinklers={sprinklers} />
// </header> */}

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
