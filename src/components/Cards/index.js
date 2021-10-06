import React, { useEffect } from "react";
import Confetti from "react-dom-confetti";

import Card from "../Card";

import useStore from "../../store";
import { cardsData } from "../../constants/cardsData";
import confettiConfig from "../../constants/confettiConfig";
import {
  selectDeck,
  selectSelectCard,
  selectResetGame,
  selectToggleHideMatches,
  selectHideMatches,
  selectAllMatchesFound,
  selectDelayedGenerateShuffledDeck,
} from "../../store/selectors";

const Cards = () => {
  const generateShuffledDeck = useStore(selectDelayedGenerateShuffledDeck);
  const deck = useStore(selectDeck);
  const selectCard = useStore(selectSelectCard);
  const resetGame = useStore(selectResetGame);
  const toggleHideMatches = useStore(selectToggleHideMatches);
  const hideMatches = useStore(selectHideMatches);
  const allMatchesFound = useStore(selectAllMatchesFound);

  useEffect(() => {
    generateShuffledDeck(cardsData);
  }, []);

  console.log("allMatchesFound:", allMatchesFound);
  console.log("confettiConfig:", confettiConfig);

  return (
    <>
      <button type="button" onClick={() => resetGame(cardsData)}>Reset Game</button>
      <div style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        justifyContent: "center",
        left: 0,
          top: 0,
        zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <Confetti active={allMatchesFound} config={confettiConfig} />
      </div>
      {allMatchesFound ? (
        <>
          <h2>Game complete!</h2>
        </>
      ) : (
        <button type="button" onClick={toggleHideMatches}>{hideMatches ? "Show" : "Hide"} matches</button>
      )}
      <ul className="cards">
        {Object.values(deck).map((card) => (
          <Card
            key={card.id}
            card={card}
            handleClick={() => selectCard(card.id)}
          />
          ))}
      </ul>
    </>
  );
};

export default Cards;
