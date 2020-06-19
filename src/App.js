import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SprinklerButtonGroup from "./components/SprinklerButtonGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SprinklerButtonGroup />
      </header>
    </div>
  );
}

export default App;
