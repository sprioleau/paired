import React from "react";
import { useHistory } from "react-router-dom";
import { MdVolumeOff, MdVolumeUp, MdPhotoSizeSelectActual } from "react-icons/md";
import { BiReset } from "react-icons/bi";
// import { GrPowerReset } from "react-icons/gr";

import useBackgroundAudio from "../../hooks/useBackgroundAudio";
import useStore from "../../store";
import {
  selectResetGame,
  // selectToggleHideMatches,
  // selectHideMatches,
  selectPlaySound,
} from "../../store/selectors";
import { sounds } from "../../constants";

const Toolbar = () => {
  const resetGame = useStore(selectResetGame);
  // const toggleHideMatches = useStore(selectToggleHideMatches);
  // const hideMatches = useStore(selectHideMatches);
  const playSound = useStore(selectPlaySound);
  const history = useHistory();
  const { isPlaying, setIsPlaying } = useBackgroundAudio({ url: "audio/background-trim.mp3" });

  const handleGoToSelectDeck = () => {
    playSound(sounds.buttonSelect);
    resetGame();
    history.push("/");
  };

  const toggleSound = () => setIsPlaying(!isPlaying);

  return (
    <div className="toolbar">
      <div className="button-row">
        {/* <button type="button" onClick={toggleHideMatches}>{hideMatches ? "Show" : "Hide"} matches</button> */}
        <button type="button" onClick={resetGame}><span className="icon"><BiReset /></span><span>Reset Game</span></button>
        <button type="button" onClick={handleGoToSelectDeck}><span className="icon"><MdPhotoSizeSelectActual /></span><span>Select Deck</span></button>
        <button type="button" onClick={toggleSound}>
          {isPlaying
            ? (
              <>
                <span className="icon"><MdVolumeOff /></span>
                <span>Off</span>
              </>
            )
            : (
              <>
                <span className="icon"><MdVolumeUp /></span>
                <span>On</span>
              </>
            )}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
