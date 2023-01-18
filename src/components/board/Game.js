import React, { useState } from 'react';
import Board from './Board';
import './Board.css';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
        // TODO
        setCurrentMove(nextMove);
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