import React, { useState, useContext, useEffect } from "react";
import batteryImg from "../assets/battery.png";
import "../styles/Energy.scss";
import EnergyContext from "../contexts/EnergyContext";

const Energy = () => {
  const { energy } = useContext(EnergyContext);

  const [batteryState, setBatteryState] = useState([true, true, true]);

  useEffect(() => {
    setBatteryState(
      batteryState.map((bar, barIndex) => (barIndex < energy ? true : false))
    );
  }, [energy]);

  useEffect(() => {
    console.log("**** batteryState", batteryState);
  });

  return (
    <div className="batteryContainer">
      <img src={batteryImg} alt="battery" />
      {batteryState.map(
        (bar, barIndex) =>
          bar && (
            <div
              key={barIndex}
              className="batteryBar"
              style={{ bottom: `${12 + 23 * barIndex}%` }}
            />
          )
      )}
    </div>
  );
};

export default Energy;
