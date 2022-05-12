import React from "react";
import Hud from "../components/Hud.jsx";
import Earth from "../components/Earth.jsx";
import Shop from "../components/Shop.jsx";
import Energy from "../components/Energy.jsx";
import Board from "../components/Board.jsx";
import "../styles/Game.scss";

const Game = () => {
  return (
    <div className="GameContainer">
    
      <Hud />
      <div className="GameContainerUpper">
        <div className="EarthContainer">
          <Earth />
        </div>

        <div className="ShopContainer">
          <Shop />
        </div>
      </div>

      <div className="GameTray">
        <Energy /> {/* Integrer au board ?*/}

        <Board />
      </div>
    </div>
  );
};

export default Game;
