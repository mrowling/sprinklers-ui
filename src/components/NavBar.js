import React from "react";
import { AppBar, Button } from "@material-ui/core";

import { useAuth0 } from "../react-auth0-spa";
import NavButton from "./NavLink";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <AppBar position="fixed">
      {!isAuthenticated && (
        <Button color="inherit" onClick={() => loginWithRedirect({})}>
          Login
        </Button>
      )}

      {isAuthenticated && (
        <span>
          <NavButton color="inherit" to="/">
            HOME
          </NavButton>
          <NavButton color="inherit" to="/profile">
            PROFILE
          </NavButton>
          <NavButton color="inherit" to="/sprinklers">
            SPRINKLERS
          </NavButton>
          <Button color="inherit" onClick={() => logout()}>
            Log out
          </Button>
        </span>
      )}
    </AppBar>
  );
};

export default NavBar;
