import "../styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import { Cards, ScoreBoard } from ".";
import ConfettiBlast from "./ConfettiBlast";
import Toolbar from "./Toolbar";
import GameFinished from "./GameFinished/index";
import DeckSelect from "./DeckSelect/index";

function App() {
  return (
    <div className="app">
      <header className="main-header">
        <h1>Paired</h1>
        <ScoreBoard />
      </header>
      <main className="main-content">
        <Router>
          <Switch>
            <Route exact path="/" component={DeckSelect} />
            <Route exact path="/play">
              <ConfettiBlast />
              <GameFinished />
              <Toolbar />
              <Cards />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
