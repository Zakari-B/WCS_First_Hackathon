import React, { useEffect } from "react";
import Pioche from "./Pioche.jsx";
import Hand from "./Hand.jsx";
import Discard from "./Discard.jsx";
import "../styles/Board.scss";

const Board = ({
  cardsHand,
  cardsDrawPile,
  cardsDeck,
  cardsDiscard,
  handleCardClick,
  handlePlay,
  handleFinishTurn,
  shopOpen,
}) => {
  return (
    <>
      <div className="Deck">
        <Pioche dataSet={cardsDrawPile} title={"Pioche"} />
      </div>
      <div className="Hand">
        <Hand
          cardsHand={cardsHand}
          handleCardClick={handleCardClick}
          cardsDiscard={cardsDiscard}
          handlePlay={handlePlay}
          handleFinishTurn={handleFinishTurn}
          shopOpen={shopOpen}
        />
      </div>
      <div className="Discard">
        <Discard dataSet={cardsDiscard} title={"Pile de défausse"} />
      </div>
    </>
  );
};

export default Board;
