import React from "react";
import { useHistory } from "react-router-dom";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

import useBackgroundAudio from "../../hooks/useBackgroundAudio";
import useStore from "../../store";
import {
  selectResetGame,
  selectToggleHideMatches,
  selectHideMatches,
  selectPlaySound,
} from "../../store/selectors";
import { sounds } from "../../constants";

const Toolbar = () => {
  const resetGame = useStore(selectResetGame);
  const toggleHideMatches = useStore(selectToggleHideMatches);
  const hideMatches = useStore(selectHideMatches);
  const playSound = useStore(selectPlaySound);
  const history = useHistory();
  const { isPlaying, setIsPlaying } = useBackgroundAudio({ url: "audio/background.mp3" });

  const handleGoToSelectDeck = () => {
    playSound(sounds.buttonSelect);
    resetGame();
    history.push("/");
  };

  const toggleSound = () => setIsPlaying(!isPlaying);

  return (
    <div className="toolbar">
      <button type="button" onClick={toggleHideMatches}>{hideMatches ? "Show" : "Hide"} matches</button>
      <button type="button" onClick={resetGame}>Reset Game</button>
      <button type="button" onClick={handleGoToSelectDeck}>Select Deck</button>
      <button type="button" onClick={toggleSound}>
        {isPlaying ? (<span><MdVolumeOff /> Off</span>) : (<span><MdVolumeUp /> On</span>)}
      </button>
    </div>
  );
};

export default Toolbar;
