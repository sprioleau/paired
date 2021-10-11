import "./styles/styles.scss";

import React from "react";
import { Cards, ScoreBoard } from "./components";
import ConfettiBlast from "./components/ConfettiBlast";
import Toolbar from "./components/Toolbar";
import GameFinished from "./components/GameFinished/index";

function App() {
  return (
    <div className="App">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Paired</h1>
        <ScoreBoard />
      </header>
      <ConfettiBlast />
      <GameFinished />
      <Toolbar />
      <Cards />
    </div>
  );
}

export default App;
