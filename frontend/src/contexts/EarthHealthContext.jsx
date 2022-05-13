import React, { createContext, useState } from "react";

const EarthHealthContext = createContext();
export default EarthHealthContext;

export function EarthHealthContextProvider({ children }) {
  const [hearthHealth, setHearthHealth] = useState(0);

  return (
    <EarthHealthContext.Provider value={{ hearthHealth, setHearthHealth }}>
      {children}
    </EarthHealthContext.Provider>
  );
}
