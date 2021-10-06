import create from "zustand";

import { generateDeckFromData } from "../utlis";
import timeout from "../utlis/timeout";

const useStore = create((set) => ({
  // State
  deck: {},
  selectedIds: [],
  matches: [],
  hideMatches: false,
  score: 0,

  // State functions
  generateShuffledDeck: (cardsData) => {
    const deck = generateDeckFromData(cardsData);
    set({ deck, selectedIds: [] });
  },

  addToScoreBy: (amount) => set((state) => ({ score: state.score + amount })),

  delayedGenerateShuffledDeck: async (cardsData, after) => {
    await timeout(after);
    set((state) => state.generateShuffledDeck(cardsData, after));
  },

  toggleHideMatches: () => set((state) => ({
    hideMatches: !state.hideMatches,
  })),

  selectCard: (cardId) => set((state) => {
    const { selectedIds, compareCards } = state;
    if (selectedIds.includes(cardId) || selectedIds.length >= 2) return { state };
    if (selectedIds.length === 1) compareCards([...selectedIds, cardId]);
    return { selectedIds: [...selectedIds, cardId] };
  }),

  deselectCards: async (after) => {
    await timeout(after);
    set({ selectedIds: [] });
  },

  updateMatches: (name) => set((state) => ({
    matches: [...state.matches, name],
    selectedIds: [],
  })),

  compareCards: (idsToCompare) => {
    if (idsToCompare.length !== 2) return null;

    return set((state) => {
      const [name1, name2] = idsToCompare.map((id) => state.deck[id].name);

      if (name1 === name2) {
        state.updateMatches(name1);
        state.addToScoreBy(10);
      }

      state.deselectCards(1000);
      return { state };
    });
  },

  resetGame: (cardsData) => set((state) => {
    state.delayedGenerateShuffledDeck(cardsData, 500);

    return {
      selectedIds: [],
      matches: [],
      score: 0,
    };
  }),

}));

export default useStore;
