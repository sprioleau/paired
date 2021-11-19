import React from "react";
import ScoreBoard from "../ScoreBoard";

const Header = () => {
  return (
    <header className="header">
      <h1>Paired</h1>
      <ScoreBoard />
    </header>
  );
};

export default Header;
