import React, { createContext, useState } from "react";

const PlayerContext = createContext();
export default PlayerContext;

export function PlayerContextProvider({ children }) {
  const [playerName, setPlayerName] = useState("");

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerContext.Provider>
  );
}
