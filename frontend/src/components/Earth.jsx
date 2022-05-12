import React, { useState } from "react";
import EarthGreen from "../assets/earth_green.png";
import EarthDead from "../assets/earth_polluted.png";

import "../styles/Earth.scss";

const Earth = () => {
  const [earthHealth, setEarthHealth] = useState(0);

  return (
    <div className="earthContainer">
      <img
        src={EarthGreen}
        alt="EarthGreen"
        className="earthImg earthGreen"
        style={{ filter: `opacity(${1 - earthHealth})` }}
      />
      <img
        src={EarthDead}
        alt="EarthDead"
        className="earthImg earthDead"
        style={{ filter: `opacity(${earthHealth})` }}
      />
    </div>
  );
};

export default Earth;
