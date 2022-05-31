import React, { createContext, useState } from "react";

const TurnContext = createContext();
export default TurnContext;

export function TurnContextProvider({ children }) {
  const [turn, setTurn] = useState(15);

  return (
    <TurnContext.Provider value={{ turn, setTurn }}>
      {children}
    </TurnContext.Provider>
  );
}
