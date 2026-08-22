import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>NEXORA</h2>
        </div>
        <div className='navlist'>
          <p onClick={() => router("/aljk23")}>Join as Guest</p>
          <p onClick={() => router("/auth")}>Register</p>
          <button className='navAuthBtn' onClick={() => router("/auth")}>
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