import React, { useState } from 'react';
import Board from './Board';
import './Board.css';

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];
    function handlePlay(nextSquares) {
        // TODO
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        // TODO
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button className='btn-move' onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });


    return (
        <div className='content__wrapper'>
            <div className='main__content'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

            </div>
            <div className='board__moves'>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

;