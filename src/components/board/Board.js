import React, { useState } from "react";
import { GiSkullCrossedBones } from "react-icons/gi";
import { SiZeromq } from "react-icons/si";
import Square from "./Square";
import "./Board.css";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = <GiSkullCrossedBones />;
    } else {
      nextSquares[i] = <SiZeromq />;
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <main className="content__wrapper">
      <div className="main__content">
        <div className="main__div">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="main__div">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="main__div">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </main>
  );
}

export default Board;
