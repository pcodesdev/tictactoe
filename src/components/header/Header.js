import React from 'react';
import './Header.css';
import video from './../../assets/kidvideo2.mp4';


function Header(props) {

    return (
        <header>
            <div className="header" id='about'>
                <div className='header__div' style={{}}>
                    <iframe
                        src={video}

                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>

        </header>
    );
}

export default Header;