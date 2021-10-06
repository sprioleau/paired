import React, { useEffect } from "react";

import Card from "../Card";

import useStore from "../../store";
import { cardsData } from "../../constants/cardsData";
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

  return (
    <>
      <button type="button" onClick={() => resetGame(cardsData)}>Reset Game</button>
      {allMatchesFound ? (
        <h2>Game complete!</h2>
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
