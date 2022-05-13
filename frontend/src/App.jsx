import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import { EnergyContextProvider } from "./contexts/EnergyContext";
import { EarthHealthContextProvider } from "./contexts/EarthHealthContext";
import { CardsContextProvider } from "./contexts/CardsContext";
import { TurnContextProvider } from "./contexts/TurnContext";
import Start from "./pages/Start";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import Global from "./pages/Global";

function App() {
  return (
    <div className="App">
      <PlayerContextProvider>
        <EnergyContextProvider>
          <EarthHealthContextProvider>
            <TurnContextProvider>
              <CardsContextProvider>
                <Routes>
                  <Route path="/" element={<Start />} />
                  <Route path="/Game" element={<Game />} />
                  <Route path="/GameOver" element={<GameOver />} />
                  <Route path="/Global" element={<Global />} />
                </Routes>
              </CardsContextProvider>
            </TurnContextProvider>
          </EarthHealthContextProvider>
        </EnergyContextProvider>
      </PlayerContextProvider>
    </div>
  );
}

export default App;
