import { useEffect, useState } from "react";

const useAudio = ({ url, autoPlay = false, shouldLoop = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const audio = new Audio(url);

  useEffect(() => {
    if (isPlaying) audio.play();
    if (shouldLoop) audio.loop();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return { isPlaying, setIsPlaying };
};

export default useAudio;
