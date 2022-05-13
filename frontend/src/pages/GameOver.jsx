import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import TurnContext from "../contexts/TurnContext";
import "../styles/GameOver.css";

const GameOver = () => {
  const { playerName, playerScore } = useContext(PlayerContext);
  const { setTurn } = useContext(TurnContext);

  useEffect(() => {
    setTurn(12);
  }, []);

  return (
    <>
      <div className="endContainer">
        <div className="glassMorphEnd">
          <h1 className="title-end text-white">Résultat</h1>
          {playerScore >= 0 ? (
            <div className="text-container">
              <div>
                <img
                  src={
                    "https://media.discordapp.net/attachments/973883562820534302/974294353495334953/unknown.png?width=488&height=473"
                  }
                  alt=""
                  className="img-end"
                />
              </div>
              <p
                className={`${
                  playerScore >= 0 ? "text-green-500" : "text-red-500"
                } text-5xl m-4 font-sans`}
              >
                Impact de {playerName} : {playerScore} points.
              </p>
              <p
                className={`${
                  playerScore >= 0 ? "text-green-500" : "text-red-500"
                } text-5xl m-4 font-sans`}
              >
                “ Bravo, tu as réussi à sauver la Terre ! ”
              </p>
            </div>
          ) : (
            <div className="text-container">
              <div>
                <img
                  src={
                    "https://cdn.discordapp.com/attachments/973883562820534302/974295504768860180/unknown.png"
                  }
                  alt=""
                  className="img-end"
                />
              </div>
              <p className="paragraph-end">
                Impact de {playerName} : {playerScore} points.
              </p>
              <p className="paragraph-end">
                “ Bravo, tu as réussi à détuire la Terre ! ”
              </p>
            </div>
          )}
          <Link to="/Global">
            <button
              type="submit"
              className="btn m-2 text-gray-800 py-2 px-8 text-4xl rounded-lg font-bold mx-8 drop-shadow-md pt-4 hover:bg-white/40 hover:text-white"
            >
              Voir les scores
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GameOver;
