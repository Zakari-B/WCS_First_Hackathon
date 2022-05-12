import React from "react";
import Pioche from "./Pioche.jsx";
import Hand from "./Hand.jsx";
import Defausse from "./Defausse.jsx";

const Board = () => {
  return (
    <div>
      <Pioche />
      <Hand />
      <Defausse />
    </div>
  );
};

export default Board;
