import React, { createContext, useState } from "react";
// create the context object here…
const PlayerContext = createContext();
export default PlayerContext;
// and then export a wrapper that manages state :

// eslint-disable-next-line react/prop-types
export function PlayerContextProvider({ children }) {
  const [playerName, setPlayerName] = useState("");

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PlayerContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerContext.Provider>
  );
}
