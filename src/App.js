// import Board from "./components/Board";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Board />

      {/* <Board /> */}
    </div>
  );
}

export default App;
