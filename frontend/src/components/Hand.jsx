import React from "react";
import Energy from "../components/Energy.jsx";

const Hand = () => {
  return (
    <div className="HandInner">
      <Energy />
      <div className="CardContainer">
        cards go here
      </div>
    </div>
  );
};

export default Hand;
