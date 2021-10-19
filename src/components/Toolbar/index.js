import React from "react";
import { useHistory } from "react-router-dom";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

import randomBetween from "../../utlis/randomBetween";
import useAudio from "../../hooks/useAudio";
import useStore from "../../store";
import {
  selectResetGame,
  selectToggleHideMatches,
  selectHideMatches,
} from "../../store/selectors";

const Toolbar = () => {
  const resetGame = useStore(selectResetGame);
  const toggleHideMatches = useStore(selectToggleHideMatches);
  const hideMatches = useStore(selectHideMatches);

  const history = useHistory();

  const handleGoToSelectDeck = () => history.push("/");

  const { isPlaying, setIsPlaying } = useAudio({ url: `audio/background-${randomBetween(1, 3)}.mp3` });

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
