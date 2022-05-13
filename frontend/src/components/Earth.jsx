import React, { useState, useContext, useEffect } from "react";
import EarthGreen from "../assets/earth_green.png";
import EarthDead from "../assets/earth_polluted.png";
import EarthNeutral from "../assets/earth_neutral.png";
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
        <img
          src={EarthNeutral}
          alt="EarthNeutral"
          className="earthImg earthNeutral"
          // style={{ filter: `opacity(${(hearthHealth + 50) / 100})` }}
          draggable={false}
        />
        <img
          src={EarthGreen}
          alt="EarthGreen"
          className="earthImg earthGreen"
          style={{ filter: `opacity(${Math.max(0, hearthHealth * 4) / 25})` }}
          draggable={false}
        />
        <img
          src={EarthDead}
          alt="EarthDead"
          className="earthImg earthDead"
          style={{
            filter: `opacity(${Math.max(0, 1 - hearthHealth * 4) / 25})`,
          }}
          draggable={false}
        />
      </div>
    </>
  );
};

export default Earth;
