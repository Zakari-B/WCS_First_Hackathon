import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

function App() {
  return (
    <div className="App">
      <PlayerContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/GameOver" element={<GameOver />} />
        </Routes>
        <Footer />
      </PlayerContextProvider>
    </div>
  );
}

export default App;
