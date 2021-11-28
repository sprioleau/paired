import React from "react";
import { BiHide, BiShow } from "react-icons/bi";
import useStore from "../../store";
import { selectHideMatches, selectToggleHideMatches } from "../../store/selectors";

const ShowHideMatchesButton = () => {
  const hideMatches = useStore(selectHideMatches);
  const toggleHideMatches = useStore(selectToggleHideMatches);
  return (
    <button type="button" onClick={toggleHideMatches}>
      <span className="icon">{hideMatches ? <BiShow /> : <BiHide />}</span>
      <span>{hideMatches ? "Show" : "Hide"} matches</span>
    </button>
  );
};

export default ShowHideMatchesButton;
