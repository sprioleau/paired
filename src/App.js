import "./styles/styles.scss";

import React from "react";
import { Cards, ScoreBoard } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Paired</h1>
      <ScoreBoard />
      <Cards />
    </div>
  );
}

export default App;
