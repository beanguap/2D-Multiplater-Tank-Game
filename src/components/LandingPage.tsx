import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>2D Multiplayer Tank Game</h1>
      <p className="tagline">Engage in real-time tank battles!</p>
      <div className="button-container">
        <Link to="/game" className="button play-button">
          Play Game
        </Link>
        <Link to="/customize" className="button customize-button">
          Customize Tank
        </Link>
        <Link to="/leaderboard" className="button leaderboard-button">
          Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;