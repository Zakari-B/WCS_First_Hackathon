import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/GameOver" element={<GameOver />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
