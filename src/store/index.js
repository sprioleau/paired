import create from "zustand";
import availableDecks from "../decks";

import { generateDeckFromData } from "../utlis";
import timeout from "../utlis/timeout";

const gameSounds = {
  correct: new Audio("/audio/correct.mp3"),
  incorrect: new Audio("/audio/incorrect.mp3"),
  flip: new Audio("/audio/flip.mp3"),
  win: new Audio("/audio/win-1.mp3"),
};

const initialSounds = {};

Object.entries(gameSounds).forEach(([name, sound]) => {
  sound.addEventListener("canplaythrough", (e) => {
    initialSounds[name] = sound;
  });
});

const useStore = create((set) => ({
  // State
  deck: generateDeckFromData(availableDecks[0]),
  userSelectedDeck: availableDecks[0],
  selectedIds: [],
  matches: [],
  hideMatches: false,
  score: 0,
  sounds: initialSounds,

  // State functions
  generateShuffledDeck: () => set((state) => ({ deck: generateDeckFromData(state.userSelectedDeck) })),

  addToScoreBy: (amount) => set((state) => ({ score: state.score + amount })),

  delayedGenerateShuffledDeck: async (cardsData, after) => {
    await timeout(after);
    set((state) => state.generateShuffledDeck(cardsData, after));
  },

  toggleHideMatches: () => set((state) => ({
    hideMatches: !state.hideMatches,
  })),

  selectDeck: (deckId) => set((state) => ({
    userSelectedDeck: availableDecks.find((deck) => deck.id === deckId),
  })),

  selectCard: (cardId) => set((state) => {
    const { selectedIds, compareCards } = state;
    if (selectedIds.includes(cardId) || selectedIds.length >= 2) return { state };
    state.sounds.flip.play();
    if (selectedIds.length === 1) compareCards([...selectedIds, cardId]);
    return { selectedIds: [...selectedIds, cardId] };
  }),

  deselectCards: async (after, isMatch) => {
    await timeout(after);

    set((state) => {
      if (isMatch) {
        state.sounds.correct.play();
      } else {
        state.sounds.incorrect.play();
      }

      return { selectedIds: [] };
    });
  },

updateMatches: (name) => set((state) => {
    const allMatchesFound = Object.values(state.deck.cards).length > 0 && Object.values(state.deck.cards).every((card) => [...state.matches, name].includes(card.name));
    if (allMatchesFound) state.sounds.win.play();

    return {
      matches: [...state.matches, name],
      selectedIds: [],
    };
  }),

  compareCards: (idsToCompare) => {
    if (idsToCompare.length !== 2) return null;

    return set((state) => {
      const [name1, name2] = idsToCompare.map((id) => state.deck.cards[id].name);
      const isMatch = name1 === name2;

      if (isMatch) {
        state.updateMatches(name1);
        state.addToScoreBy(10);
      }

      state.deselectCards(1000, isMatch);
      return { state };
    });
  },

  resetGame: () => set((state) => {
    state.delayedGenerateShuffledDeck(state.userSelectedDeck, 500);

    return {
      selectedIds: [],
      matches: [],
      score: 0,
    };
  }),

}));

export default useStore;
