import React from "react";
import useStore from "../../store/index";
import { selectScore, selectDeckId } from "../../store/selectors/index";

const ScoreBoard = () => {
  const score = useStore(selectScore);
  const deckId = useStore(selectDeckId);

  if (!deckId) return null;

  return (
    <div className="scoreboard">
      <p className="scoreboard__text">Score: <span>{score}</span></p>
    </div>
  );
};

export default ScoreBoard;
