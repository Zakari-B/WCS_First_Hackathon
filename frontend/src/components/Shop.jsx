import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import cardsList from "../assets/cards.json";

const Shop = ({
  id,
  shopOpen,
  handleShop,
  cardsHand,
  cardsDiscard,
  cardsDrawPile,
  cardsInPlayerDeck,
  buyCard,
}) => {
  const [choices, setChoices] = useState();
  const checkAlreadyExist = () => {
    const inDeck = [...cardsHand, ...cardsDiscard, ...cardsDrawPile];
    return cardsList.filter((card) => !inDeck.includes(card.id));
  };
  const pickCards = () => {
    const available = checkAlreadyExist();
    const cardsInShop = [];
    while (cardsInShop.length < Math.min(6, available.length)) {
      const randomIndex = Math.floor(Math.random() * available.length);
      // console.log("randomIndex", randomIndex);
      if (!cardsInShop.includes(available[randomIndex].id))
        cardsInShop.push(available[randomIndex].id);
    }
    console.log("cards in shop : " + cardsInShop);
    setChoices(
      available
        .filter((card) => cardsInShop.includes(card.id))
        .map((card) => {
          return card;
        })
    );
  };

  useEffect(() => {
    pickCards();
  }, []);

  return (
    <>
      <button className="ShopButton" type="button" onClick={() => handleShop()}>
        OPEN SHOP
      </button>
      <button
        className="testButton"
        type="button"
        onClick={() => checkAlreadyExist()}
      >
        TESTBUTTON
      </button>

      <div className="ShopDiv">
        {shopOpen
          ? choices &&
            choices.map((card) => (
              <Card
                buyCard={buyCard}
                key={"Shop_" + card.id}
                card={card}
                onClick={() => {
                  handleShop();
                  buyCard(card.id);
                }}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Shop;
