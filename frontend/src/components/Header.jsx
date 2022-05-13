import React from "react";
import { Link } from "react-router-dom";
import Hud from "./Hud";
import Rules from "./Rules.jsx"
import "../styles/Header.css";
import logo from "../assets/logo-small.png";
const Header = () => {
  return (
    <>
      <div>
        <nav className="full-navigation">
          <img src={logo} alt="" className="logo-nav"/>
          <ul className="navigation">
            <li className="navigation-name">
              <Link to="/">Jeu</Link>
            </li>
            <li className="navigation-name">
              <Link to="/Global">Global</Link>
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
