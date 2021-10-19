import React from "react";

import Confetti from "react-dom-confetti";
import confettiConfig from "../../constants/confettiConfig";
import useStore from "../../store";
import { selectAllMatchesFound } from "../../store/selectors";

const ConfettiBlast = () => {
  const allMatchesFound = useStore(selectAllMatchesFound);
  console.log("allMatchesFound:", allMatchesFound);

  return (
    <div className="confetti">
      <Confetti active={allMatchesFound} config={confettiConfig} />
    </div>
  );
};

export default ConfettiBlast;
