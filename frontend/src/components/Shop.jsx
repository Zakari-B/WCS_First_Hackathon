import React, { useEffect, useState, useContext } from "react";
import Card from "./Card.jsx";
import CardsContext from "../contexts/CardsContext";

const Shop = ({
  shopOpen,
  toggleShop,
  cardsHand,
  cardsDiscard,
  cardsDrawPile,
  buyCard,
  setShopOpen,
}) => {
  const { cardsList } = useContext(CardsContext);
  const [choices, setChoices] = useState();
  const checkAlreadyExist = () => {
    const inDeck = [...cardsHand, ...cardsDiscard, ...cardsDrawPile].map(
      (card) => card.id
    );
    return cardsList.filter(
      (card) => !inDeck.includes(card.id) && card.isStarterDeck === false
    );
  };
  const pickCards = () => {
    // console.log(
    //   "Picking cards !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    // );
    const available = checkAlreadyExist();
    const cardsInShop = [];
    while (cardsInShop.length < Math.min(5, available.length)) {
      const randomIndex = Math.floor(Math.random() * available.length);
      // console.log("randomIndex", randomIndex);
      if (!cardsInShop.includes(available[randomIndex].id))
        cardsInShop.push(available[randomIndex].id);
    }
    // console.log("cards in shop : " + cardsInShop);
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
  }, [cardsHand, cardsDiscard, cardsDrawPile]);

  return (
    <>
      <button
        className="ShopButton"
        type="button"
        onClick={() => setShopOpen(true)}
      >
        OPEN SHOP
      </button>

      <div className="ShopDiv">
        {shopOpen
          ? choices &&
            choices.map((card) => (
              <Card buyCard={buyCard} key={"Shop_" + card.id} card={card} />
            ))
          : null}
      </div>
    </>
  );
};

export default Shop;
