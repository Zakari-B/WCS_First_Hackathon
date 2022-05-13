import React from "react";
import { Link } from "react-router-dom";
import Hud from "./Hud";
import Rules from "./Rules.jsx"
import "../styles/Header.css";
import logo from "../assets/logo-small.png";
const Header = () => {
  let tour = 1;
  return (
    <>
      <div>
        <nav className="full-navigation">
          <img src={logo} alt="" className="logo-nav"/>
          <ul className="navigation">
            <li className="navigation-name">
              <Link to="/">Accueil</Link>
            </li>
            <li>Tour: {tour++}
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
