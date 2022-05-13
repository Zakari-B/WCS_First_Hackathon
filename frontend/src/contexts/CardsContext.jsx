import React, { createContext, useState } from "react";
import data from "../assets/cards.json";
// create the context object here…
const CardsContext = createContext();
export default CardsContext;
// and then export a wrapper that manages state :

// eslint-disable-next-line react/prop-types
export function CardsContextProvider({ children }) {
  const [cardsList, setCardsList] = useState(data);

  return (
    <CardsContext.Provider value={{ cardsList, setCardsList }}>
      {children}
    </CardsContext.Provider>
  );
}
