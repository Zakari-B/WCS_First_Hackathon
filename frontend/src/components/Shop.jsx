import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import cardsList from "../assets/cards.json";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Shop = () => {
  const [choices, setChoices] = useState();
  const { height, width } = useWindowDimensions();
  const [desktopShop, setDesktopShop] = useState(false);
  const pickCards = () => {
    const cardsInShop = [];
    while (cardsInShop.length < 6) {
      const randomIndex = Math.floor(Math.random() * cardsList.length);
      // console.log("randomIndex", randomIndex);
      if (!cardsInShop.includes(cardsList[randomIndex].id))
        cardsInShop.push(cardsList[randomIndex].id);
    }
    console.log("cards in shop : " + cardsInShop);
    setChoices(
      cardsList
        .filter((card) => cardsInShop.includes(card.id))
        .map((card) => {
          return card;
        })
    );
  };

  const openShop = () => {
    if (height <= 768 || width <= 1024) {
      console.log("open mobile shop");
    } else {
      setDesktopShop(!desktopShop);
      console.log(desktopShop);
    }
  };

  useEffect(() => {
    pickCards();
  }, []);

  useEffect(() => {
    console.log("width " + width);
  }, [width]);
  useEffect(() => {
    console.log("height " + height);
  }, [height]);

  return (
    <>
      <button className="ShopButton" type="button" onClick={() => openShop()}>
        OPEN {height <= 768 || width <= 1024 ? "MOBILE " : "DESKTOP "}SHOP
      </button>
      <div className="ShopDiv">
        {desktopShop
          ? choices &&
            choices.map((card) => <Card key={"TEMPORAIRE"} card={card} />)
          : null}
      </div>
    </>
  );
};

export default Shop;
