import React, { createContext, useState } from "react";
// create the context object here…
const TurnContext = createContext();
export default TurnContext;
// and then export a wrapper that manages state :

// eslint-disable-next-line react/prop-types
export function TurnContextProvider({ children }) {
    const [turn, setTurn] = useState(15);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TurnContext.Provider value={{ turn, setTurn }}>
      {children}
    </TurnContext.Provider>
  );
}
