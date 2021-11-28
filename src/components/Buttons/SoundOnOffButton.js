import React from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import useBackgroundAudio from "../../hooks/useBackgroundAudio";

const SoundOnOffButton = () => {
  const { isPlaying, setIsPlaying } = useBackgroundAudio({ url: "audio/background-trim.mp3" });

  const toggleSound = () => setIsPlaying(!isPlaying);

  return (
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
  );
};

export default SoundOnOffButton;
