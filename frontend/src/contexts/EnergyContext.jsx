import React, { createContext, useState } from "react";

const EnergyContext = createContext();
export default EnergyContext;

export function EnergyContextProvider({ children }) {
  const [energy, setEnergy] = useState(3);

  return (
    <EnergyContext.Provider value={{ energy, setEnergy }}>
      {children}
    </EnergyContext.Provider>
  );
}
