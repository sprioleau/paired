import React from "react";
import { Cards, Gameboard, ScoreBoard } from "./components";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <h1>Paired</h1>
      <ScoreBoard />
      <Gameboard />
      <Cards />
    </div>
  );
}

export default App;
