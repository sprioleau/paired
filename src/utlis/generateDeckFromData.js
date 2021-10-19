const generateDeckFromData = (cardsData) => {
  const { cards, id } = cardsData;
  const fullDeck = cards.concat(cards);
  const cardsInDeck = fullDeck
  .sort(() => Math.random() - 0.5)
  .reduce((acc, card, index) => {
    acc[index] = { id: index, ...card };
    return acc;
  }, {});

  const deck = {
    id,
    cards: cardsInDeck,
  };

  return deck;
};

export default generateDeckFromData;
