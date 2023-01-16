import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header>
            <div className="header" id='about'>
                <div className='header__div'>
                    <p className="header__text">Tic-tac-toe, also known as noughts and crosses or Xs and Os, is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a simple game that can be played by people of all ages.</p>
                </div>
            </div>

        </header>
    );
}

export default Header;