import React, { useState, useEffect, useContext } from "react";
import Hud from "../components/Hud.jsx";
import Earth from "../components/Earth.jsx";
import Shop from "../components/Shop.jsx";
import Board from "../components/Board.jsx";
import "../styles/Game.scss";
import data from "../assets/cards.json";
import EnergyContext from "../contexts/EnergyContext";
import EarthHealthContext from "../contexts/EarthHealthContext";

const Game = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [cardsDeck, setCardsDeck] = useState(
    data.filter((e) => e.isStarterDeck)
  );
  const [cardsHand, setCardsHand] = useState([]);
  const [cardsDiscard, setCardsDiscard] = useState([]);
  const [cardsDrawPile, setCardsDrawPile] = useState(
    data.filter((e) => e.isStarterDeck)
  );
  const [turn, setTurn] = useState(15);
  const { energy, setEnergy } = useContext(EnergyContext);
  const { hearthHealth, setHearthHealth } = useContext(EarthHealthContext);

  const toggleShop = () => {
    setCardsHand(
      cardsHand.map((card) => {
        card.selected = false;
        return card;
      })
    );

    setShopOpen(!shopOpen);
  };

  /*
  Organisation d'un tour :
OK   1) - Piocher 1 card X 5;
OK        A chaque fois, si cardsDrawPile !== [], alors push random de cardsDiscard dans DrawPile
OK      - push Card dans la Hand
OK      - Retrait de la carte dans la drawpile
OK              Si DrawPile === [], ne pas afficher visuellement de DrawPile

OK 2) - Ecoute : onClick sur les cards, => 
OK                   Energie OK ? ajout à la Discard, retrait de la Hand, baisser Energie
OK                   Energie NOK ? Ne pas jouer


  // Etape suivante
  3) ShopModal qui apparait
      onClick => ajouter au deck, ferme shopModal
      Désincrèmenter turn
      Retour à l'étape 1

*/

  const piocheCartes = () => {
    let starterIds = cardsHand.map((card) => card.id);
    let newDrawPile = cardsDrawPile;
    let newDiscard = cardsDiscard;

    // vérifier si pioche suffisante pour avoir 5 carte
    // si nok rajouter à pioche la défausse
    if (cardsDrawPile.length + cardsHand.length < 5) {
      newDrawPile = [...newDrawPile, ...newDiscard];
      newDiscard = [];
    }

    const nbCardsToGet = Math.min(5, newDrawPile.length + starterIds.length);

    while (starterIds.length < nbCardsToGet) {
      const randomIndex = Math.floor(Math.random() * newDrawPile.length);
      if (!starterIds.includes(newDrawPile[randomIndex].id))
        starterIds.push(newDrawPile[randomIndex].id);
    }

    setCardsDrawPile(
      newDrawPile.filter((card) => !starterIds.includes(card.id))
    );
    setCardsDiscard([...newDiscard]);
    setCardsHand(
      data
        .filter((card) => starterIds.includes(card.id))
        .map((card) => {
          card.selected = false;
          return card;
        })
    );
  };

  const handleCardClick = (e, id) => {
    if (!shopOpen) {
      const cardInHand = !cardsHand.filter((card) => card.id === id)[0]
        .selected;

      if (cardInHand) {
        if (data.filter((card) => card.id === id)[0].cost <= energy) {
          setCardsHand(
            cardsHand.map((card) => {
              if (card.id === id) card.selected = true;
              return card;
            })
          );

          setEnergy(energy - data.filter((card) => card.id === id)[0].cost);
        }
      } else {
        setCardsHand(
          cardsHand.map((card) => {
            if (card.id === id) card.selected = false;
            return card;
          })
        );

        setEnergy(energy + data.filter((card) => card.id === id)[0].cost);
      }
    }

    // vérifier si la carte est dans la hand ou dans le cardsDiscard
  };

  // -          onClick sur fin de tour =>
  // cardsHand push dans cardsDiscard
  //       IF Turn === 0 => Modal Partie finie, bouton redirect page result

  const handlePlay = (e) => {
    setHearthHealth(
      hearthHealth +
        cardsHand
          .filter((card) => card.selected)
          .reduce((acc, val) => acc + val.value, 0)
    );
    setCardsHand(cardsHand.filter((card) => !card.selected));

    setCardsDiscard([
      ...cardsDiscard,
      ...cardsHand
        .filter((card) => card.selected)
        .map((card) => {
          card.selected = false;
          return card;
        }),
    ]);
  };

  const handleFinishTurn = () => {
    setShopOpen(false);
    setTurn(turn - 1);
    setEnergy(3);
  };

  const buyCard = (selected) => {
    const inDeck = [...cardsHand, ...cardsDiscard, ...cardsDrawPile];

    if (!inDeck.map((card) => card.id).includes(selected)) {
      setCardsDrawPile([
        ...cardsDrawPile,
        data.filter((card) => card.id === selected)[0],
      ]);

      handleFinishTurn();
    }
  };

  useEffect(() => {
    if (turn - 1 === 0) {
      // finish game
      // faire rediriger vers la route gameover
    } else piocheCartes();
  }, [turn]);

  return (
    <>
      <Hud />
      <div className="GameContainer">
        <div className="GameContainerUpper">
          <div className="EarthContainer">
            <Earth />
          </div>

          <div className="ShopContainer">
            <Shop
              shopOpen={shopOpen}
              toggleShop={toggleShop}
              cardsHand={cardsHand}
              cardsDiscard={cardsDiscard}
              cardsDrawPile={cardsDrawPile}
              buyCard={buyCard}
              setShopOpen={setShopOpen}
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
          />
        </div>
      </div>
    </>
  );
};

export default Game;
