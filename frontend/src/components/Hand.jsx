import React from "react";
import Energy from "../components/Energy.jsx";
import Card from "../components/Card.jsx";
import "../styles/Elements.scss";

const Hand = ({
  cardsHand,
  handleCardClick,
  handlePlay,
  handleFinishTurn,
  shopOpen,
  setShopOpen,
}) => {
  return (
    <div className="HandInner">
      {cardsHand.filter((card) => card.selected).length ? (
        <button
          type="button"
          className="btn-type playButton"
          onClick={handlePlay}
        >
          JOUER
        </button>
      ) : null}

      {!shopOpen && (
        <button
          className="ShopButton btn-type"
          type="button"
          onClick={() => setShopOpen(true)}
        >
          FIN DU TOUR
        </button>
      )}

      {shopOpen && (
        <button
          type="button"
          className="finishButton btn-type"
          onClick={handleFinishTurn}
        >
          CHOISISSEZ UNE CARTE
        </button>
      )}

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
