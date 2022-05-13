import React, { createContext, useState } from "react";

const PlayerContext = createContext();
export default PlayerContext;

export function PlayerContextProvider({ children }) {
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName, playerScore, setPlayerScore }}>
      {children}
    </PlayerContext.Provider>
  );
}
