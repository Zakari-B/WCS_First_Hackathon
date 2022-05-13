import React, { createContext, useState } from "react";
import data from "../assets/cards.json";

const CardsContext = createContext();
export default CardsContext;

export function CardsContextProvider({ children }) {
  const [cardsList, setCardsList] = useState(data);

  return (
    <CardsContext.Provider value={{ cardsList, setCardsList }}>
      {children}
    </CardsContext.Provider>
  );
}
