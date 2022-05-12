import React from "react";
import Energy from "../components/Energy.jsx";
import Card from "../components/Card.jsx";

const Hand = ({ cardsHand, handleCardClick }) => {
  return (
    <div className="HandInner">
      <Energy />
      <div className="CardContainer">
        {cardsHand.map((card) => (
          <Card key={card.id} handleCardClick={handleCardClick} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
