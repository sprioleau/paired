import "./styles/styles.scss";

import React from "react";
import { Cards, ScoreBoard } from "./components";
import ConfettiBlast from "./components/ConfettiBlast";

function App() {
  return (
    <div className="App">
      <h1>Paired</h1>
      <ConfettiBlast />
      <ScoreBoard />
      <Cards />
    </div>
  );
}

export default App;
