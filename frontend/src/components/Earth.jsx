import React, { useState } from "react";
import EarthGreen from "../assets/earth_green.png";
import EarthDead from "../assets/earth_polluted.png";

import "../styles/Earth.scss";

const Earth = () => {
  const [earthHealth, setEarthHealth] = useState(0); // range [-100 +100]

  return (
    <div className="earthContainer">
      <img
        src={EarthGreen}
        alt="EarthGreen"
        className="earthImg earthGreen"
        style={{ filter: `opacity(${(earthHealth + 100) / 200})` }}
      />
      <img
        src={EarthDead}
        alt="EarthDead"
        className="earthImg earthDead"
        style={{ filter: `opacity(${1 - (earthHealth + 100) / 200})` }}
      />
    </div>
  );
};

export default Earth;
