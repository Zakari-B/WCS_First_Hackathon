import React from "react";
import batteryImg from "../assets/battery.png";
import "../styles/Energy.scss";

const Energy = () => {
  const batteryState = [true, true, true];

  return (
    <div className="batteryContainer">
      <img src={batteryImg} alt="battery" />
      {batteryState.map(
        (bar, barIndex) =>
          bar && (
            <div
              key={barIndex}
              className="batteryBar"
              style={{ bottom: `${12 + 23 * (barIndex)}%` }}
            />
          )
      )}
    </div>
  );
};

export default Energy;
