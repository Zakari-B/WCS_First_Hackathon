import React, {useContext} from "react";
import { Link } from "react-router-dom";
import TurnContext from "../contexts/TurnContext";
import Hud from "./Hud";
import Rules from "./Rules.jsx"
import "../styles/Header.css";
import logo from "../assets/logo-small.png";
const Header = () => {
  let {turn} = useContext(TurnContext);
  return (
    <>
      <div>
        <nav className="full-navigation">
          <img src={logo} alt="" className="logo-nav"/>
          <ul className="navigation">
            <li className="navigation-name">
              <Link to="/">Accueil</Link>
            </li>
            <li>Tour restant: {turn-1}
            </li>
            <li>
              <Hud />
            </li>
          <div className="navigation-name instructions-part">
          <li >
          <Rules />
            </li>
          </div></ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
