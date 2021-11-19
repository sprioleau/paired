import React, { useState } from "react";
import availableDecks from "../../decks";
import DeckCover from "./DeckCover";

const DeckSelect = () => {
  const [allowSelections, setAllowSelections] = useState(true);

  return (
    <div className="deck-select">
      <h2 className="deck-select__prompt">Select a deck!</h2>
      <ul
        className="deck-select__decks"
        style={{ pointerEvents: allowSelections ? "auto" : "none" }}
      >
        {availableDecks.map((deck) => <DeckCover key={deck.id} deck={deck} setAllowSelections={setAllowSelections} />)}
      </ul>
    </div>
  );
};

export default DeckSelect;
