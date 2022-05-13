import React from "react";
import Energy from "../components/Energy.jsx";
import Card from "../components/Card.jsx";
import "../styles/Elements.scss";

const Hand = ({ cardsHand, handleCardClick, handlePlay }) => {
  return (
    <div className="HandInner">
      <button type="button" className="PlayButton" onClick={handlePlay}>
        PLAY
      </button>
      <button type="button" className="finishButton" onClick={handlePlay}>
        FINISH TURN
      </button>
      <Energy />
      <div className="CardContainer">
        {cardsHand.map((card) => (
          <Card
            key={"Hand_" + card.id}
            handleCardClick={handleCardClick}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

export default Hand;
