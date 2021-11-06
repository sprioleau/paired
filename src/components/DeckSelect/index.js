import React from "react";
import { useHistory } from "react-router-dom";
import { selectSelectDeck, selectResetGame } from "../../store/selectors";
import useStore from "../../store";
import availableDecks from "../../decks";
import selectRandomElement from "../../utlis/selectRandomElement";

const DeckSelect = () => {
  const selectDeck = useStore(selectSelectDeck);
  const resetGame = useStore(selectResetGame);

  const history = useHistory();

  const handleSelectDeck = (deckId) => {
    selectDeck(deckId);
    resetGame();
    history.push("/play");
  };

  return (
    <div className="deck-select">
      <h2 className="deck-select__prompt">Select a deck!</h2>
      <ul className="deck-select__decks">
        {availableDecks.map(({ id, title, cards }) => {
          const randomCard = selectRandomElement(cards);

          return (
            <li key={id} className="deck-select__deck" onClick={() => handleSelectDeck(id)}>
              <h3 className="deck-select__title">{title}</h3>
              <div className="deck-select__cover-image-wrapper">
                <div
                  className="deck-select__cover-image"
                  alt={randomCard.name}
                  data-name={randomCard.name}
                  style={{
                    backgroundImage: `url(images/${id}/${randomCard.filename})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: randomCard.backgroundColor,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeckSelect;
