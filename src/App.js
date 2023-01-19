// import Board from "./components/Board";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Game from "./components/board/Game";
import GameRule from "./components/gamerules/GameRule";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Game />
      <GameRule />

      {/* <Board /> */}
    </div>
  );
}

export default App;
