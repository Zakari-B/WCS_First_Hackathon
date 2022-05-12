import React, { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import "../styles/GameOver.css";

const GameOver = () => {
  let points = 50;
  let nPoints = -50;
  let player = "Sacha";
  const { playerName, setPlayerName } = useContext(PlayerContext);

  return (
    <>
      <div className="endContainer">
        <div className="glassMorphEnd">
          <h1 className="title-end">Résultat</h1>
          {points <= 0 ?
            <div className="text-container">
              <p className="paragraph-end">Impact de {player} : {points} points.</p>
              <p className="paragraph-end">“ Bravo, tu as réussi à sauver la Terre ! ”</p>
              <div>
                <img src={"https://media.discordapp.net/attachments/973883562820534302/974294353495334953/unknown.png?width=488&height=473"} alt="" className="img-end" />
              </div>
            </div>
            :
            <div  className="text-container">
              <p className="paragraph-end">Impact de {player} : {nPoints} points.</p>
              <p className="paragraph-end">“ Bravo, tu as réussi à détuire la Terre ! ”</p>
              <div>
                <img src={"https://cdn.discordapp.com/attachments/973883562820534302/974295504768860180/unknown.png"} alt="" className="img-end" />
              </div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default GameOver;
