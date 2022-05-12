import React from "react";
import "../styles/Card.scss";

const Card = ({ card, handleCardClick }) => {
  return (
    <div
      id={card.id}
      className={`card-unselected flex flex-col items-center w-1/5 h-3/4 m-3 border border-slate-700 rounded-md shadow-lg ${
        card.positif ? "bg-green-200" : "bg-orange-200"
      } ${card.selected && "card-selected"}`}
      onClick={(e) => handleCardClick(e, card.id)}
    >
      <div className="w-full flex justify-around m-2">
        <p className="text-2xl">{card.cost}</p>
        <h1 className="text-2xl font-semibold text-gray-800">{card.name}</h1>
      </div>
      <img
        src={card.image}
        alt=""
        className="h-1/3 object-center"
        height="100px"
        width="100px"
      />
      <p className="">{card.text}</p>
    </div>
  );
};

export default Card;
