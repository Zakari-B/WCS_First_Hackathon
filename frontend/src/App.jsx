import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import { EnergyContextProvider } from "./contexts/EnergyContext";
import { EarthHealthContextProvider } from "./contexts/EarthHealthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

function App() {
  return (
    <div className="App">
      <PlayerContextProvider>
        <EnergyContextProvider>
          <EarthHealthContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/Game" element={<Game />} />
              <Route path="/GameOver" element={<GameOver />} />
            </Routes>
            <Footer />
          </EarthHealthContextProvider>
        </EnergyContextProvider>
      </PlayerContextProvider>
    </div>
  );
}

export default App;
