import React from "react";
import Energy from "../components/Energy.jsx";
import Card from "../components/Card.jsx";
import "../styles/Elements.scss";

const Hand = ({ cardsHand, handleCardClick, handlePlay, handleFinishTurn }) => {
  return (
    <div className="HandInner">
      {cardsHand.filter((card) => card.selected).length ? (
        <button type="button" className="playButton" onClick={handlePlay}>
          PLAY
        </button>
      ) : null}

      <button type="button" className="finishButton" onClick={handleFinishTurn}>
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
