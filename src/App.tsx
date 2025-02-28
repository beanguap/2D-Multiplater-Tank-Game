import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameCanvas from './components/GameCanvas';
import TankCustomization from './components/TankCustomization';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/game">Play Game</Link>
          <Link to="/customize">Customize Tank</Link>
        </div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GameCanvas />} />
          <Route path="/customize" element={<TankCustomization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;