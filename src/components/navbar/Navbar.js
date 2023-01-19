
import { useState, useRef } from "react";
import Logo from "./../../assets/monkey logo.png";
import logoaudio from "./../../assets/logoaudio.wav";
import { FaHamburger } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const audioRef = useRef(null)

  const handleAudio = () => {
    audioRef.current.play()
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" onClick={handleAudio}>
          <img src={Logo} alt="logo" />
        </div>
        <audio ref={audioRef} src={logoaudio} />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaHamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#game">Game</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
