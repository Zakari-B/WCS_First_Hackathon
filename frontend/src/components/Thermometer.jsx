import React, { useState, useContext, useEffect } from "react";
import EarthHealthContext from "../contexts/EarthHealthContext";
import thermoImg from "../assets/thermometer.png";
import "../styles/Thermometer.scss";

const Thermometer = () => {
  const { hearthHealth } = useContext(EarthHealthContext);
  const [thermoState, setthermoState] = useState([true, true, true]);

  useEffect(() => {
    if (hearthHealth >= 0) {
      setthermoState([false, false, false]);
    } else if (hearthHealth > -33) {
      setthermoState([true, false, false]);
    } else if (hearthHealth > -66) {
      setthermoState([true, true, false]);
    } else {
      setthermoState([true, true, true]);
    }
  }, [hearthHealth]);

  return (
    <div className="thermo-container">
      <div className="thermo-box">
        <img src={thermoImg} draggable={false} alt="battery" />
        <div className="thermoBall" />
        {thermoState.map(
          (bar, barIndex) =>
            bar && (
              <div
                key={barIndex}
                className="thermoBar"
                style={{
                  bottom: `${67 + 10 * barIndex}%`,
                }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Thermometer;
