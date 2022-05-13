import React, { useState, useContext, useEffect } from "react";
import EarthGreen from "../assets/earth_green.png";
import EarthDead from "../assets/earth_polluted.png";
import Thermometer from "./Thermometer";
import gradientBackground from "../assets/gradientBackground.jpg";
import EarthHealthContext from "../contexts/EarthHealthContext";

import "../styles/Earth.scss";

const Earth = () => {
  const { hearthHealth } = useContext(EarthHealthContext); // range [-100 +100]

  return (
    <>
      <img
        src={gradientBackground}
        alt="EarthBackgroundImg"
        draggable={false}
        className="spaceImg"
      />
      <div className="earthContainer">
        <Thermometer />
        <img
          src={EarthGreen}
          alt="EarthGreen"
          className="earthImg earthGreen"
          style={{ filter: `opacity(${(hearthHealth + 100) / 200})` }}
          draggable={false}
        />
        <img
          src={EarthDead}
          alt="EarthDead"
          className="earthImg earthDead"
          style={{ filter: `opacity(${1 - (hearthHealth + 100) / 200})` }}
          draggable={false}
        />
      </div>
    </>
  );
};

export default Earth;
