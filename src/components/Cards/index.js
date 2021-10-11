import React, { useEffect } from "react";

import Card from "../Card";

import useStore from "../../store";
import { cardsData } from "../../constants/cardsData";
import {
  selectDeck,
  selectSelectCard,
  selectDelayedGenerateShuffledDeck,
} from "../../store/selectors";

const Cards = () => {
  const generateShuffledDeck = useStore(selectDelayedGenerateShuffledDeck);
  const deck = useStore(selectDeck);
  const selectCard = useStore(selectSelectCard);

  useEffect(() => {
    generateShuffledDeck(cardsData);
  }, []);

  return (
    <ul className="cards">
      {Object.values(deck).map((card) => (
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
