import React from "react";
import {
 DeckSelectButton,
 ResetGameButton,
 ShowHideMatchesButton,
 SoundOnOffButton,
} from "../Buttons";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="button-row">
        <ShowHideMatchesButton />
        <ResetGameButton />
        <DeckSelectButton />
        <SoundOnOffButton />
      </div>
    </div>
  );
};

export default Toolbar;
