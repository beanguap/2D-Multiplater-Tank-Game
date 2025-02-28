// src/components/EnhancedLandingPage.tsx
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="enhanced-landing">
      <div className="hero-section">
        <h1 className="hero-title">2D Multiplayer Tank Game</h1>
        <p className="hero-tagline">Engage. Conquer. Dominate the battlefield.</p>
        <div className="hero-buttons">
          <Link to="/game" className="btn play-btn">Play Now</Link>
          <Link to="/customize" className="btn customize-btn">Customize Your Tank</Link>
        </div>
      </div>
      <div className="info-section">
        <h2>Real-Time Battles</h2>
        <p>Experience fast-paced, strategic combat in real time with players from around the world.</p>
      </div>
    </div>
  );
};

export default LandingPage;
