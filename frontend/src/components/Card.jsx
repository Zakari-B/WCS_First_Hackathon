import React from "react";
import "../styles/Card.scss";
import tree from "../assets/svg/tree.svg";

const Card = ({ card, handleCardClick }) => {
  return (
    <div
      id={card.id}
      className={`card-unselected card ${
        card.positif ? "bg-green-200" : "bg-orange-200"
      } ${card.selected && "card-selected"}`}
      onClick={(e) => handleCardClick(e, card.id)}
    >
      <div className="card-top">
        <p className="card-cost">{card.cost}</p>
        <h1 className="card-title">{card.name}</h1>
        <div className="card-img">
          {" "}
          <img src={tree} alt="" className="card-img" />
        </div>
      </div>
      <div className="card-bottom">
        <p className="card-effect">{card.text}</p>
      </div>
    </div>
  );
};

export default Card;