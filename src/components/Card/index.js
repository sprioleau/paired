import React, { useCallback } from "react";
import classnames from "classnames";

import useStore from "../../store";
import { selectHideMatches, selectMatches, selectSelectedIds } from "../../store/selectors";

const Card = ({
 card: {
 id, filename, name, backgroundColor,
}, handleClick,
}) => {
  const matches = useStore(selectMatches);
  const selectedIds = useStore(selectSelectedIds);
  const hideMatches = useStore(selectHideMatches);

  const styles = {
    card: classnames(
      "card",
      { selected: selectedIds.includes(id) },
      { matched: matches.includes(name) },
      { hidden: hideMatches },
    ),
  };

  const onClick = useCallback(() => handleClick(id), [id]);

  return (
    <li className={styles.card} onClick={onClick}>
      <div className="card__front" style={{ backgroundColor }}>
        <div
          className="card__image"
          style={{ backgroundImage: `url(images/${filename})` }}
          alt={name}
          data-name={name}
        />
      </div>
      <div className="card__back" />
    </li>
  );
};

export default Card;
