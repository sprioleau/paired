const generateDeckFromData = (cardsData) => {
  const fullDeck = cardsData.concat(cardsData);
  return fullDeck
    .sort(() => Math.random() - 0.5)
    .reduce((acc, card, index) => {
      acc[index] = { id: index, ...card };
      return acc;
    }, {});
};

export default generateDeckFromData;
