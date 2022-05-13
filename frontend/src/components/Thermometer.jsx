import React, { useState, useContext, useEffect } from "react";
import EarthHealthContext from "../contexts/EarthHealthContext";
import thermoImg from "../assets/thermometer.png";
import "../styles/Thermometer.scss";

const Thermometer = () => {
  const { hearthHealth } = useContext(EarthHealthContext);
  const [thermoBar, setThermoBar] = useState(0);
  const [thermoColor, setThermoColor] = useState("rgb(125, 125, 125)");

  function thermoBarHandler() {
    if (hearthHealth < 0) {
      return setThermoBar(Math.min((Math.abs(hearthHealth) / 100) * 36, 36));
    } else {
      return setThermoBar(0);
    }
  }

  function thermoColorHandler() {
    if (hearthHealth < 0) {
      setThermoColor(
        `rgb(${Math.min((Math.abs(hearthHealth) / 100) * 255 + 125, 255)}, ${
          100 - 0.33 * Math.abs(hearthHealth)
        }, ${100 - 0.33 * Math.abs(hearthHealth)})`
      );
    } else {
      setThermoColor(
        `rgb(${100 - 0.33 * Math.abs(hearthHealth)}, ${Math.min(
          125 + (Math.abs(hearthHealth) / 100) * 255,
          255
        )}, ${Math.min(125 + (Math.abs(hearthHealth) / 100) * 255, 255)})`
      );
    }
  }

  useEffect(() => {
    thermoBarHandler();
    thermoColorHandler();
  }, [hearthHealth]);

  return (
    <div className="thermo-container">
      <div className="thermo-box">
        <img src={thermoImg} draggable={false} alt="battery" />
        <div
          className="thermoBall"
          style={{
            backgroundColor: `${thermoColor}`,
          }}
        />
        <div
          className="thermoBar"
          style={{
            height: `${thermoBar}%`,
            borderColor: `${thermoColor}`,
            backgroundColor: `${thermoColor}`,
          }}
        />
      </div>
    </div>
  );
};

export default Thermometer;
