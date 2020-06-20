import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import SprinklerPage from "./components/SprinklerPage";

import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const { loading } = useAuth0();
  const classes = useStyles();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar className={classes.appBar} />
        </header>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/sprinklers" component={SprinklerPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
