import React, { useRef } from "react";
import Lottie from "lottie-react";
import { useHistory } from "react-router-dom";
import confettiBurst from "../../lottie/confettie-burst.json";
import { selectSelectDeck } from "../../store/selectors";
import useStore from "../../store";

const DeckCover = ({
 deck: {
 id, title, cards, coverIndex,
}, setAllowSelections,
}) => {
  const selectDeck = useStore(selectSelectDeck);
  const history = useHistory();
  const lottieRef = useRef();
  const selectedCard = cards[coverIndex];

  const handleAnimationComplete = () => history.push("/play");

  const handleSelectDeck = (deckId) => {
    setAllowSelections(false);
    lottieRef.current.setSpeed(2);
    lottieRef.current.play();
    selectDeck(deckId);
  };

  return (
    <li key={id} className="deck-select__deck" onClick={() => handleSelectDeck(id)}>
      <h3 className="deck-select__title">{title}</h3>
      <div className="deck-select__cover-image-wrapper">
        <div
          className="deck-select__cover-image"
          alt={selectedCard.name}
          data-name={selectedCard.name}
          style={{
            backgroundImage: `url(images/${id}/${selectedCard.filename})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: selectedCard.backgroundColor,
            position: "relative",
          }}
        >
          <Lottie
            animationData={confettiBurst}
            loop={false}
            autoplay={false}
            onComplete={handleAnimationComplete}
            lottieRef={lottieRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "225%",
              height: "225%",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default DeckCover;
