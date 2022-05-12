import React, { createContext, useState } from "react";
// create the context object here…
const EarthHealthContext = createContext();
export default EarthHealthContext;
// and then export a wrapper that manages state :

// eslint-disable-next-line react/prop-types
export function EarthHealthContextProvider({ children }) {
  const [hearthHealth, setHearthHealth] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EarthHealthContext.Provider value={{ hearthHealth, setHearthHealth }}>
      {children}
    </EarthHealthContext.Provider>
  );
}
