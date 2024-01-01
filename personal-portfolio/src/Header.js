import React from "react";
import './Header.css';
const Header = () => {
    return (
        <div id="header">
        <div class="container">
            <nav>
                <h1 class="logo">Sharan</h1>
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fa-solid fa-circle-xmark" onclick="closemenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="header-text">
                <p>Web Developer specialized in REACT JS</p>
                <h1>Hi I'm <span>Sharan L.</span> <br/> from Spain</h1>


            </div>
        </div>
    </div>
    );
  };
  
  export default Header;