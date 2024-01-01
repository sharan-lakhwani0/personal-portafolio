import React from "react";
import './Header.css';
const Header = () => {
    return (
        <div id="header">
        <div className="container">
            <nav>
                <h1 className="logo">Sharan</h1>
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-text">
                <p>Web Developer specialized in REACT JS</p>
                <h1>Hi I'm <span>Sharan L.</span> <br/> from Spain</h1>


            </div>
        </div>
    </div>
    );
  };
  
  export default Header;