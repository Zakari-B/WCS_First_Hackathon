import React from "react";
import Energy from "../components/Energy.jsx";
import Card from "../components/Card.jsx";

const Hand = () => {
  const sampleCard = {
    id: 1,
    name: "Arbre",
    cost: 1,
    positif: true,
    text: "1 degat piochez 2 cartes",
    value: 1,
    effect: null,
    image: ".svg",
    isStarterDeck: true,
  };

  return (
    <div className="HandInner">
      <Energy />
      <div className="CardContainer">
        <Card card={sampleCard} />
      </div>
    </div>
  );
};

export default Hand;
