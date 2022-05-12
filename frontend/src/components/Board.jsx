import React from "react";
import Pioche from "./Pioche.jsx";
import Hand from "./Hand.jsx";
import Defausse from "./Defausse.jsx";
import "../styles/Board.scss";

const Board = () => {
  return (
    <>
      <div className="Pioche">
        <Pioche />
      </div>
      <div className="Hand">
        <Hand />
      </div>
      <div className="Defausse">
        <Defausse />
      </div>
      
    </>
  );
};

export default Board;
