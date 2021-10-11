import React from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

import { cardsData } from "../../constants/cardsData";
import randomBetween from "../../utlis/randomBetween";
import useAudio from "../../hooks/useAudio";
import useStore from "../../store";
import {
  selectResetGame,
  selectToggleHideMatches,
  selectHideMatches,
  selectAllMatchesFound,
} from "../../store/selectors";

const Toolbar = () => {
  const resetGame = useStore(selectResetGame);
  const toggleHideMatches = useStore(selectToggleHideMatches);
  const hideMatches = useStore(selectHideMatches);
  const allMatchesFound = useStore(selectAllMatchesFound);

  const { isPlaying, setIsPlaying } = useAudio({ url: `audio/background-${randomBetween(1, 3)}.mp3`, autoPlay: true });

  const toggleSound = () => setIsPlaying(!isPlaying);

  return (
    <div className="toolbar">
      <header style={{ display: "flex", alignItems: "center" }}>
        <button type="button" onClick={() => resetGame(cardsData)}>Reset Game</button>
        {allMatchesFound ? (
          <h2>Game complete!</h2>
        ) : (
          <button type="button" onClick={toggleHideMatches}>{hideMatches ? "Show" : "Hide"} matches</button>
        )}
        <button type="button" onClick={toggleSound}>
        {isPlaying ? (<MdVolumeOff />) : (<MdVolumeUp />)}
        </button>
      </header>
    </div>
  );
};

export default Toolbar;
