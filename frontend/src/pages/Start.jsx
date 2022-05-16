import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import TurnContext from "../contexts/TurnContext";
import "../styles/Start.scss";
import logo from "../assets/logo-hvh-light.png";
import question from "../assets/svg/question-mark.svg";

const Start = () => {
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const { setTurn } = useContext(TurnContext);

  useEffect(() => {
    setTurn(12);
  }, []);

  return (
    <>
      <div className="startContainer">
        <div className="glassMorph">
          <img
            src={logo}
            alt="human vs earth"
            className="select-none"
          />
          <div className="startInput">
            <form className="startForm">
              <input
                name="player"
                type="text"
                placeholder="Entrez un pseudo..."
                className="textInput m-2 text-gray-800 py-2 px-8 text-4xl rounded-lg font-bold drop-shadow-md placeholder:text-slate-800 placeholder:text-lg "
                onChange={(event) => {
                  setPlayerName(event.target.value);
                }}
              />
              {playerName !== "" && (
                <Link to={`/Game`}>
                  {" "}
                  <button
                    type="submit"
                    className="btn m-2 text-gray-800 py-2 px-8 text-4xl rounded-lg font-bold drop-shadow-md hover:bg-white/40 hover:text-white"
                  >
                    Jouer
                  </button>
                </Link>
              )}
            </form>
          </div>
          <div className="glassMorph0">
            <img src={question} alt="" className="questionImg"/>
            <p className="hide">
              Bienvenue sur Human vs Planet ! <br /> <br /> Un jeu qui vous invite à
              prendre parti pour soit sauver la planète, soit participer activement
              à sa destruction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
