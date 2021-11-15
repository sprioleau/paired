import { useEffect, useState } from "react";

const useBackgroundAudio = ({ url, autoPlay = false, shouldLoop = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const audio = new Audio(url);

  useEffect(() => {
    const setupAudio = (e) => {
      if (isPlaying) audio.play();
      if (shouldLoop) audio.loop();
    };

    audio.addEventListener("canplaythrough", setupAudio);

    return () => {
      audio.removeEventListener("canplaythrough", setupAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return { isPlaying, setIsPlaying };
};

export default useBackgroundAudio;
