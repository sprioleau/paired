import React from "react";
import { BiReset } from "react-icons/bi";
import useStore from "../../store";
import { selectResetGame } from "../../store/selectors";

const ResetGameButton = () => {
  const resetGame = useStore(selectResetGame);
  return <button type="button" onClick={resetGame}><span className="icon"><BiReset /></span><span>Reset Game</span></button>;
};

export default ResetGameButton;
