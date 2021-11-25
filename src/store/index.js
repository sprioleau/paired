import create from "zustand";
import { sounds } from "../constants";
import availableDecks from "../decks";

import { generateDeckFromData } from "../utlis";
import timeout from "../utlis/timeout";

let soundId = null;
const gameSounds = new Audio("/audio/game-sounds.mp3");

const initialtDeck = availableDecks.find(({ id }) => id === "favorite-characters");

const useStore = create((set) => ({
  // State
  deck: generateDeckFromData(initialtDeck),
  userSelectedDeck: initialtDeck,
  selectedIds: [],
  matches: [],
  hideMatches: false,
  score: 0,
  gameSounds,
  // currentPlayer: null,

  // State functions
  generateShuffledDeck: () => set((state) => ({ deck: generateDeckFromData(state.userSelectedDeck) })),

  playSound: ({ startTime, duration, volume = 0.65 }) => {
    if (soundId) clearTimeout(soundId);
    gameSounds.volume = volume;
    gameSounds.currentTime = startTime;
    gameSounds.play();
    soundId = setTimeout(() => gameSounds.pause(), duration * 1000);
  },

  addToScoreBy: (amount) => set((state) => ({ score: state.score + amount })),

  delayedGenerateShuffledDeck: async (cardsData, after) => {
    await timeout(after);
    set((state) => state.generateShuffledDeck(cardsData, after));
  },

  toggleHideMatches: () => set((state) => {
    state.playSound(sounds.buttonSelect);
    return { hideMatches: !state.hideMatches };
  }),

  selectDeck: (deckId) => set((state) => {
    state.playSound(sounds.confirm);
    return { userSelectedDeck: availableDecks.find((deck) => deck.id === deckId) };
  }),

  selectCard: (cardId) => set((state) => {
    const { selectedIds, compareCards } = state;
    if (selectedIds.includes(cardId) || selectedIds.length >= 2) return { state };
    state.playSound(sounds.flip);
    if (selectedIds.length === 1) compareCards([...selectedIds, cardId]);
    return { selectedIds: [...selectedIds, cardId] };
  }),

  compareCards: (idsToCompare) => {
    if (idsToCompare.length !== 2) return null;

    return set((state) => {
      const [name1, name2] = idsToCompare.map((id) => state.deck.cards[id].name);
      const isMatch = name1 === name2;
      const allMatchesFound = Object.values(state.deck.cards).length > 0 && Object.values(state.deck.cards).every((card) => [...state.matches, name1].includes(card.name));

      if (isMatch) {
        state.updateMatches(name1, allMatchesFound);
        state.addToScoreBy(10);
      }

      if (!allMatchesFound) state.deselectCards(1000, isMatch);
      return { state };
    });
  },

  deselectCards: async (after, isMatch) => {
    await timeout(after);

    set((state) => {
      state.playSound(isMatch ? sounds.correct : sounds.incorrect);
      return { selectedIds: [] };
    });
  },

  updateMatches: (name, allMatchesFound) => set((state) => {
    if (allMatchesFound) state.playSound(sounds.win);

    return {
      matches: [...state.matches, name],
      selectedIds: [],
    };
  }),

  resetGame: () => set((state) => {
    state.playSound(sounds.buttonSelect);
    state.delayedGenerateShuffledDeck(state.userSelectedDeck, 500);

    return {
      selectedIds: [],
      matches: [],
      score: 0,
    };
  }),

}));

export default useStore;
