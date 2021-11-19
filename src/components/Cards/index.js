import React, { useEffect } from "react";

import Card from "../Card";

import useStore from "../../store";
import {
  selectDeck,
  selectSelectCard,
  selectDelayedGenerateShuffledDeck,
} from "../../store/selectors";

const Cards = () => {
  const generateShuffledDeck = useStore(selectDelayedGenerateShuffledDeck);
  const deck = useStore(selectDeck);
  const { cards } = deck;
  const selectCard = useStore(selectSelectCard);

  useEffect(() => {
    generateShuffledDeck();
  }, [generateShuffledDeck]);

  if (!cards) return null;

  return (
    <ul className="cards">
      {Object.values(cards).map((card) => (
        <Card
          key={card.id}
          card={card}
          handleSelectCard={() => selectCard(card.id)}
        />
        ))}
    </ul>
  );
};

export default Cards;
