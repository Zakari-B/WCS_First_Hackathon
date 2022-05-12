import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  return (
    <>
      <div>
        <nav className="full-navigation">
          <ul className="navigation">
            <li className="navigation-name">
              <Link to="/">Jeu</Link>
            </li>
            <li className="navigation-name">
              <Link to="/Global">Global</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
