import React, { useState, useContext } from "react";
import EarthGreen from "../assets/earth_green.png";
import EarthDead from "../assets/earth_polluted.png";
import spaceBG from "../assets/universe.png";
import EarthHealthContext from "../contexts/EarthHealthContext";

import "../styles/Earth.scss";

const Earth = () => {
  const { earthHealth } = useContext(EarthHealthContext); // range [-100 +100]

  return (
    <>
      <img
        src={spaceBG}
        alt="EarthBackgroundImg"
        draggable={false}
        className="spaceImg"
      />
      <div className="earthContainer">
        <img
          src={EarthGreen}
          alt="EarthGreen"
          className="earthImg earthGreen"
          style={{ filter: `opacity(${(earthHealth + 100) / 200})` }}
          draggable={false}
        />
        <img
          src={EarthDead}
          alt="EarthDead"
          className="earthImg earthDead"
          style={{ filter: `opacity(${1 - (earthHealth + 100) / 200})` }}
          draggable={false}
        />
      </div>
    </>
  );
};

export default Earth;
