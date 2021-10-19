import React from "react";

import { selectAllMatchesFound, selectResetGame } from "../../store/selectors/index";
import useStore from "../../store/index";

const GameFinished = () => {
  const allMatchesFound = useStore(selectAllMatchesFound);
  const resetGame = useStore(selectResetGame);

  if (!allMatchesFound) return null;

  return (
    <div className="game-finished">
      <div className="game-finished__message-wrapper">
        <h2>Great Job! You found all of the matches!</h2>
        <button type="button" className="game-finished__reset-button" onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default GameFinished;
