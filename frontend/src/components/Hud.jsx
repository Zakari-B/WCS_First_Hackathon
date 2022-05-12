import React, { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import "../styles/Hud.scss";

const Hud = () => {
  const { playerName } = useContext(PlayerContext);
  return (
    <div className="hud">
      <span className="hudPlayerName">Player name : {playerName} TOTO</span>
    </div>
  );
};

export default Hud;
