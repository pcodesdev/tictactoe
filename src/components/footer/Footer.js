import React, { useRef } from 'react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import btnAudio from './../../assets/moveaudio.wav';
import './Footer.css';

function Footer(props) {

    let today = new Date();
    let year = today.getFullYear();
    const audioRef = useRef(null)
    // const [audio] = useState(new Audio('../../assets/moveaudio.wav')); // create an audio element

    const handleSound1 = () => {
        audioRef.current.play()
    }

    return (
        <div className='footer' onClick={handleSound1}>
            <div className='footer__content' >
                <ul >
                    <li><a href='https://www.linkedin.com/in/peter-njuguna-b3531614a/'><AiFillLinkedin /></a></li>
                    <li><a href='https://twitter.com/PcodesDev'><AiFillTwitterCircle /></a></li>
                    <li><a href='https://pcodesdev.hashnode.dev/projectcreate-a-tic-tac-toe-game-using-react'><SiHashnode /></a></li>
                </ul>
            </div>
            <audio ref={audioRef} src={btnAudio} />
            <div className="footer__date">
                <p>Copyright &copy; {year}</p>
            </div>

        </div>
    );
}

export default Footer;