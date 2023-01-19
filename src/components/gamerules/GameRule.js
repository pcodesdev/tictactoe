import React from 'react';
import './GameRules.css';

function GameRule(props) {
    return (
        <div>
            <div className='rules'>
                <h1>Here are the general rules for playing Tic-tac-toe:</h1>
                <div className='game__rules'>
                    <ol>
                        <li>The game is played on a 3x3 grid.</li>
                        <li>Two players take turns placing their symbols (either "X" or "O") on the grid.</li>
                        <li>The first player to place their symbol is "X" and the second player is "O".</li>
                        <li>The player who succeeds in placing three of their symbols in a horizontal, vertical, or diagonal row wins the game.</li>
                        <li>If all of the spaces on the grid are filled and no player has won, the game is a draw.</li>
                    </ol>
                </div>

            </div>
        </div>
    );
}

export default GameRule;