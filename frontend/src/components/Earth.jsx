import React, { useState, useContext, useEffect, useRef } from "react";
import EarthGreen from "../assets/earth_green.png";
import EarthDead from "../assets/earth_polluted.png";
import Thermometer from "./Thermometer";
import EarthNeutral from "../assets/earth_neutral.png";
import gradientBackground from "../assets/gradientBackground.jpg";
import EarthHealthContext from "../contexts/EarthHealthContext";

import "../styles/Earth.scss";

const Earth = ({ healthChange }) => {
  const { hearthHealth } = useContext(EarthHealthContext);
  const [healthNum, setHealthNum] = useState(healthChange);
  const [healthClass, setHealthClass] = useState(" ");
  const doAnim = useRef(true);

  useEffect(() => {
    setHealthNum(healthChange);

    if (healthChange !== false && doAnim.current) {
      doAnim.current = false;

      if (healthChange > 0) setHealthClass("scoring-green scoring-anim");
      else setHealthClass("scoring-red scoring-anim");

      setTimeout(() => {
        setHealthClass("");
        doAnim.current = true;
      }, 1800);
    }
  }, [healthChange]);

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

        <div className={`scoring ${healthClass}`}>
          {healthNum > 0 && healthNum !== false
            ? `+${healthNum}`
            : healthNum.toString()}
        </div>

        <img
          src={EarthNeutral}
          alt="EarthNeutral"
          className="earthImg earthNeutral"
          draggable={false}
        />
        <img
          src={EarthGreen}
          alt="EarthGreen"
          className="earthImg earthGreen"
          style={{ filter: `opacity(${Math.max(0, hearthHealth * 2) / 50})` }}
          draggable={false}
        />
        <img
          src={EarthDead}
          alt="EarthDead"
          className="earthImg earthDead"
          style={{
            filter: `opacity(${Math.max(0, 1 - hearthHealth * 2) / 50})`,
          }}
          draggable={false}
        />
      </div>
    </>
  );
};

export default Earth;
