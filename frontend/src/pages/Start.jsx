import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import "../styles/Start.css";
import logo from "../assets/logo-hvh-light.png";
import TurnContext from "../contexts/TurnContext";

const Start = () => {
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const { setTurn } = useContext(TurnContext);

  useEffect(() => {
    setTurn(15);
  }, []);

  return (
    <header>
      <div className="helpButton transition duration-150 ease-out hover:ease-in">
        <img
          src="https://www.svgrepo.com/show/305312/question-mark.svg"
          alt="question"
          className="img-help select-none"
          draggable={false}
        />
        <p className="hide">
          Bienvenue sur Human vs Planet ! <br /> <br /> Un jeu qui vous invite à
          prendre parti pour soit sauver la planète, soit participer activement
          à sa destruction.
        </p>
      </div>
      <div className="startContainer">
        <div className="glassMorph">
          <img
            src={logo}
            alt="human vs earth"
            className="select-none"
            draggable={false}
          />
          <div className="startInput">
            <form className="start-form">
              <input
                name="player"
                type="text"
                placeholder="Entrez votre pseudo..."
                className="text-input m-2 text-gray-800 py-2 px-8 text-4xl rounded-lg font-bold mx-8 drop-shadow-md placeholder:text-slate-800 placeholder:text-lg "
                onChange={(event) => {
                  setPlayerName(event.target.value);
                }}
              />
              {playerName !== "" && (
                <Link to={`/Game`}>
                  {" "}
                  <button
                    type="submit"
                    className="btn m-2 text-gray-800 py-2 px-8 text-4xl rounded-lg font-bold mx-8 drop-shadow-md hover:bg-white/40 hover:text-white"
                  >
                    Jouer
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Start;
