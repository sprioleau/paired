import React from "react";

import { selectAllMatchesFound } from "../../store/selectors/index";
import useStore from "../../store/index";
import { DeckSelectButton, ResetGameButton } from "../Buttons";

const GameFinished = () => {
  const allMatchesFound = useStore(selectAllMatchesFound);

  if (!allMatchesFound) return null;

  return (
    <div className="game-finished">
      <div className="game-finished__message-wrapper">
        <h2>Great Job! You found all of the matches!</h2>
        <div className="button-row">
          <ResetGameButton />
          <DeckSelectButton />
        </div>
      </div>
    </div>
  );
};

export default GameFinished;
