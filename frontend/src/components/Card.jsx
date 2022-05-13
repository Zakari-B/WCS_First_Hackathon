import React from "react";
import "../styles/Card.scss";

const Card = ({ card, handleCardClick, buyCard }) => {
  return (
    <div
      id={card.id}
      className={`card-unselected card ${
        card.positif ? "bg-green-200" : "bg-orange-200"
      } ${card.selected && "card-selected"}`}
      onClick={(e) => {
        handleCardClick && handleCardClick(e, card.id);
        buyCard && buyCard(card.id);
      }}
    >
      <div className="card-top">
        <p className="card-cost">{card.cost}</p>
        <h1 className="card-title">{card.name}</h1>
        <div className="card-img">
          {" "}
          <img src={card.image} alt="" className="card-img" draggable={false} />
        </div>
      </div>
      <div className="card-bottom">
        <p className="card-effect">{card.text}</p>
      </div>
    </div>
  );
};

export default Card;
