import React, { useState } from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const router = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='landingPageContainer'>
      <nav className="navbar">
        <div className="navHeader">
          <h2>NEXORA</h2>
        </div>

        {/* Simple 3-line icon */}
        <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Dropdown list */}
        <div className={`navlist ${isOpen ? "open" : ""}`}>
          <p onClick={() => { router("/aljk23"); setIsOpen(false); }}>Join as Guest</p>
          <p onClick={() => { router("/auth"); setIsOpen(false); }}>Register</p>
          <button className="navAuthBtn" onClick={() => { router("/auth"); setIsOpen(false); }}>
            Login
          </button>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div className="heroText">
          <h1><span>Connect</span> with your loved Ones</h1>
          <p>Cover a distance by NEXORA</p>
          <div className="heroButtons">
            <Link to="/auth" className="primaryBtn">Get Started</Link>
            <Link to="/about" className="secondaryBtn">About Me</Link>
          </div>
        </div>

        <div className="heroImage">
          <img src="/mobile.png" alt="NEXORA App Preview" />
        </div>
      </div>
    </div>
  );
}