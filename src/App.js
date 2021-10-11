import "./styles/styles.scss";

import React from "react";
import { Cards, ScoreBoard } from "./components";
import ConfettiBlast from "./components/ConfettiBlast";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <h1>Paired</h1>
      <ConfettiBlast />
      <ScoreBoard />
      <Toolbar />
      <Cards />
    </div>
  );
}

export default App;
