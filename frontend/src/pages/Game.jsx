import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Earth from "../components/Earth.jsx";
import Shop from "../components/Shop.jsx";
import Board from "../components/Board.jsx";
import "../styles/Game.scss";
import TurnContext from "../contexts/TurnContext";
import EnergyContext from "../contexts/EnergyContext";
import EarthHealthContext from "../contexts/EarthHealthContext";
import PlayerContext from "../contexts/PlayerContext";
import Footer from "../components/Footer";
import CardsContext from "../contexts/CardsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const { cardsList } = useContext(CardsContext);
  const [shopOpen, setShopOpen] = useState(false);
  const [cardsDeck, setCardsDeck] = useState(
    cardsList.filter((e) => e.isStarterDeck)
  );
  const [cardsHand, setCardsHand] = useState([]);
  const [cardsDiscard, setCardsDiscard] = useState([]);
  const [cardsDrawPile, setCardsDrawPile] = useState(
    cardsList.filter((e) => e.isStarterDeck)
  );
  const [healthChange, setHealthChange] = useState(false);
  const { turn, setTurn } = useContext(TurnContext);
  const { energy, setEnergy } = useContext(EnergyContext);
  const { hearthHealth, setHearthHealth } = useContext(EarthHealthContext);
  const { playerName, setPlayerScore } = useContext(PlayerContext);

  let navigate = useNavigate();

  const toggleShop = () => {
    setCardsHand(
      cardsHand.map((card) => {
        card.selected = false;
        return card;
      })
    );

    setShopOpen(!shopOpen);
  };

  useEffect(() => {
    setHearthHealth(0);
    setPlayerScore(0);
  }, []);

  const piocheCartes = (drawEffect = false, toRemoveId = false) => {
    let starterIds = cardsHand.map((card) => card.id);
    let newDrawPile = cardsDrawPile;
    let newDiscard = cardsDiscard;

    if (toRemoveId !== false) {
      starterIds = starterIds.filter((id) => id !== toRemoveId);
      newDiscard = [
        ...newDiscard,
        cardsList.filter((card) => card.id === toRemoveId)[0],
      ];
    }

    // Vérification si la pioche est suffisante pour avoir 5 cartes, si NOK rajouter la défausse à la pioche
    if (cardsDrawPile.length + cardsHand.length < 5) {
      newDrawPile = [...newDrawPile, ...newDiscard];
      newDiscard = [];
    }

    let nbCardsToGet = Math.min(5, newDrawPile.length + starterIds.length);

    if (drawEffect) {
      nbCardsToGet = Math.min(
        starterIds.length + drawEffect,
        newDrawPile.length + starterIds.length
      );
      if (
        cardsDrawPile.length + cardsHand.length <
        starterIds.length + drawEffect
      ) {
        newDrawPile = [...newDrawPile, ...newDiscard];
        newDiscard = [];
      }
    }

    while (starterIds.length < nbCardsToGet) {
      const randomIndex = Math.floor(Math.random() * newDrawPile.length);
      if (!starterIds.includes(newDrawPile[randomIndex].id))
        starterIds.push(newDrawPile[randomIndex].id);
    }

    const newDrawPileToSet = newDrawPile.filter(
      (card) => !starterIds.includes(card.id)
    );

    const cardsListToSet = cardsList
      .filter((card) => starterIds.includes(card.id))
      .map((card) => {
        card.selected = false;
        return card;
      });

    if (drawEffect) {
      return {
        drawPile: newDrawPileToSet,
        discard: [...newDiscard],
        hand: cardsListToSet,
      };
    } else {
      setCardsDrawPile(newDrawPileToSet);
      setCardsDiscard([...newDiscard]);
      setCardsHand(cardsListToSet);
    }
  };

  const handleCardClick = (e, id) => {
    if (!shopOpen) {
      const cardInHand = !cardsHand.filter((card) => card.id === id)[0]
        .selected;

      if (cardInHand) {
        if (cardsList.filter((card) => card.id === id)[0].cost <= energy) {
          setCardsHand(
            cardsHand.map((card) => {
              if (card.id === id) card.selected = true;
              return card;
            })
          );

          setEnergy(
            energy - cardsList.filter((card) => card.id === id)[0].cost
          );
        }
      } else {
        setCardsHand(
          cardsHand.map((card) => {
            if (card.id === id) card.selected = false;
            return card;
          })
        );

        setEnergy(energy + cardsList.filter((card) => card.id === id)[0].cost);
      }
    }
  };

  const handlePlay = (e) => {
    const healthChange = cardsHand
      .filter((card) => card.selected)
      .reduce((acc, val) => acc + val.value, 0);

    setHealthChange(healthChange);

    setHearthHealth(hearthHealth + healthChange);

    const effectNewCards = [];
    let effectPioche = {};

    cardsHand
      .filter((card) => card.selected)
      .filter((card) => card.effect !== null)
      .forEach((card) => {
        const effect = card.effect;

        if (effect === "draw" || effect === "megaDraw") {
          effectPioche = piocheCartes(effect === "draw" ? 1 : 2, card.id);
        }

        if (effect === "gain") setEnergy(Math.min(energy + 1, 3));

        if (effect === "megaGain") setEnergy(Math.min(energy + 2, 3));

        if (effect === "addArbre")
          effectNewCards.push({
            id: cardsList.reduce((acc, val) => Math.max(acc, val.id), 0) + 1,
            name: "Arbre",
            cost: 1,
            positif: true,
            text: "1 soin",
            value: 1,
            effect: null,
            image: "/tree.png",
            isStarterDeck: false,
          });
        if (effect === "addUsine")
          effectNewCards.push({
            id: cardsList.reduce((acc, val) => Math.max(acc, val.id), 0) + 1,
            name: "Usine",
            cost: 1,
            positif: false,
            text: "1 dégât",
            value: -1,
            effect: null,
            image: "/factory.png",
            isStarterDeck: false,
          });
      });

    if (Object.keys(effectPioche).length) {
      setCardsHand(effectPioche.hand);
      setCardsDiscard([...effectPioche.discard, ...effectNewCards]);
      setCardsDrawPile(effectPioche.drawPile);
    } else {
      setCardsHand(cardsHand.filter((card) => !card.selected));

      setCardsDiscard([
        ...cardsDiscard,
        ...cardsHand
          .filter((card) => card.selected)
          .map((card) => {
            card.selected = false;
            return card;
          }),
        ...effectNewCards,
      ]);
    }
  };

  const handleFinishTurn = () => {
    setCardsDiscard([...cardsDiscard, ...cardsHand]);
    setCardsHand([]);
    setShopOpen(false);
    setTurn(turn - 1);
    setEnergy(3);
  };

  const buyCard = (selected) => {
    const inDeck = [...cardsHand, ...cardsDiscard, ...cardsDrawPile];

    if (!inDeck.map((card) => card.id).includes(selected)) {
      setCardsDrawPile([
        ...cardsDrawPile,
        cardsList.filter((card) => card.id === selected)[0],
      ]);

      handleFinishTurn();
    }
  };

  useEffect(() => {
    if (turn - 1 <= 0) {
      const today = new Date();
      const dateAsString =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        today.getDate().toString().padStart(2, "0");
      axios.post("http://hvp.dev4.me/scores", {
        playerName: playerName,
        score: hearthHealth,
        date: dateAsString,
      });
      setPlayerScore(hearthHealth);
      navigate("/GameOver", { replace: true });
    } else piocheCartes();
  }, [turn]);

  return (
    <>
      <Header />
      <div className="GameContainer">
        <div className="GameContainerUpper">
          <div className="EarthContainer">
            <Earth healthChange={healthChange} />
          </div>

          <div className="ShopContainer">
            <Shop
              shopOpen={shopOpen}
              toggleShop={toggleShop}
              cardsHand={cardsHand}
              cardsDiscard={cardsDiscard}
              cardsDrawPile={cardsDrawPile}
              buyCard={buyCard}
            />
          </div>
        </div>

        <div className="GameTray">
          <Board
            handleCardClick={handleCardClick}
            cardsHand={cardsHand}
            cardsDrawPile={cardsDrawPile}
            cardsDeck={cardsDeck}
            cardsDiscard={cardsDiscard}
            handlePlay={handlePlay}
            handleFinishTurn={handleFinishTurn}
            shopOpen={shopOpen}
            setShopOpen={setShopOpen}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Game;
