import React from "react";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { sounds } from "../../constants";
import useStore from "../../store";
import { selectPlaySound, selectResetGame } from "../../store/selectors";

const DeckSelectButton = () => {
  const resetGame = useStore(selectResetGame);
  const playSound = useStore(selectPlaySound);
  const history = useHistory();

  const handleGoToSelectDeck = () => {
    playSound(sounds.buttonSelect);
    resetGame();
    history.push("/");
  };

  return <button type="button" onClick={handleGoToSelectDeck}><span className="icon"><MdPhotoSizeSelectActual /></span><span>Select Deck</span></button>;
};

export default DeckSelectButton;
