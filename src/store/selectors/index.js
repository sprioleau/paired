/* eslint-disable semi-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable no-multi-spaces */

export const selectDeck                        = (state) => state.deck                        ;
export const selectSelectedIds                 = (state) => state.selectedIds                 ;
export const selectMatches                     = (state) => state.matches                     ;
export const selectHideMatches                 = (state) => state.hideMatches                 ;
export const selectScore                       = (state) => state.score                       ;
export const selectGenerateShuffledDeck        = (state) => state.generateShuffledDeck        ;
export const selectAddToScoreBy                = (state) => state.addToScoreBy                ;
export const selectDelayedGenerateShuffledDeck = (state) => state.delayedGenerateShuffledDeck ;
export const selectToggleHideMatches           = (state) => state.toggleHideMatches           ;
export const selectSelectCard                  = (state) => state.selectCard                  ;
export const selectDeselectCards               = (state) => state.deselectCards               ;
export const selectUpdateMatches               = (state) => state.updateMatches               ;
export const selectCompareCards                = (state) => state.compareCards                ;
export const selectResetGame                   = (state) => state.resetGame                   ;

export const selectAllMatchesFound = (state) => Object.values(state.deck).length > 0 && Object.values(state.deck).every(({ name }) => state.matches.includes(name));
