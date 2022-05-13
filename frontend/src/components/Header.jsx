import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TurnContext from "../contexts/TurnContext";
import EarthHealthContext from "../contexts/EarthHealthContext";
import Hud from "./Hud";
import Rules from "./Rules.jsx";
import "../styles/Header.css";
import logo from "../assets/header-logo.png";

const Header = () => {
  const { turn } = useContext(TurnContext);
  const { hearthHealth } = useContext(EarthHealthContext);

  return (
    <>
      <div>
        <nav className="full-navigation">
          <img src={logo} alt="" className="logo-nav" />
          <ul className="navigation">
            <li className="navigation-name">
              <Link to="/">Accueil</Link>
            </li>
            <li
              className={`text-3xl font-bold ${
                turn < 5 ? "text-red-500" : "text-green-500"
              }`}
            >
              Tours restants: {turn - 1}
            </li>
            <li
              className={`text-3xl font-bold ${
                hearthHealth < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              Impact : {hearthHealth}{" "}
              {hearthHealth < 0 ? "\uD83D\uDD25" : "\uD83C\uDF3F"}
            </li>
            <li>
              <Hud />
            </li>
            <div className="navigation-name instructions-part">
              <li>
                <Rules />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
