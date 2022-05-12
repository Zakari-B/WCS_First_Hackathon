import React, { createContext, useState } from "react";
// create the context object here…
const EnergyContext = createContext();
export default EnergyContext;
// and then export a wrapper that manages state :

// eslint-disable-next-line react/prop-types
export function EnergyContextProvider({ children }) {
  const [energy, setEnergy] = useState(3);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EnergyContext.Provider value={{ energy, setEnergy }}>
      {children}
    </EnergyContext.Provider>
  );
}
