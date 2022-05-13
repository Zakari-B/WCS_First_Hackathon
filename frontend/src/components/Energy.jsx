import React, { useState, useContext, useEffect } from "react";
import batteryImg from "../assets/battery-light.png";
import "../styles/Energy.scss";
import EnergyContext from "../contexts/EnergyContext";

const energyColor = ["#75c332", "#bfc332", "#ff4600"];

const Energy = () => {
  const { energy } = useContext(EnergyContext);

  const [batteryState, setBatteryState] = useState([true, true, true]);

  useEffect(() => {
    setBatteryState(
      batteryState.map((bar, barIndex) => (barIndex < energy ? true : false))
    );
  }, [energy]);

  return (
    <div className="battery-container">
      <div className="battery-box">
        <img src={batteryImg} draggable={false} alt="battery" />
        {batteryState.map(
          (bar, barIndex) =>
            bar && (
              <div
                key={barIndex}
                className="batteryBar"
                style={{
                  bottom: `${12 + 23 * barIndex}%`,
                  backgroundColor:
                    energyColor[batteryState.filter((bat) => !bat).length],
                }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Energy;
