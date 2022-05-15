import React, { useCallback } from "react";
import classnames from "classnames";

import useStore from "../../store";
import {
 selectHideMatches, selectMatches, selectSelectedIds, selectDeckId,
} from "../../store/selectors";

const Card = ({
 card: {
 id, filename, name, backgroundColor,
}, handleSelectCard,
}) => {
  const matches = useStore(selectMatches);
  const selectedIds = useStore(selectSelectedIds);
  const deckId = useStore(selectDeckId);
  const hideMatches = useStore(selectHideMatches);

  const styles = {
    card: classnames(
      "card",
      { selected: selectedIds.includes(id) },
      { matched: matches.includes(name) },
      { hidden: hideMatches },
    ),
  };

  const onClick = useCallback(() => handleSelectCard(id), [id, handleSelectCard]);

  return (
    <button className={styles.card} onClick={onClick} type="button">
      <div className="card__front" style={{ backgroundColor }}>
        <div
          className="card__image"
          style={{ backgroundImage: `url(images/${deckId}/${filename})` }}
          alt={name}
          data-name={name}
        />
      </div>
      <div className="card__back" />
    </button>
  );
};

export default Card;
