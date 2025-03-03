import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameCanvas from './components/GameCanvas';
import TankCustomization from './components/TankCustomization';
import { WebSocketProvider } from './contexts/WebSocketContext';
import './styles/app.css';

// Create a navigation component that we can conditionally show
const Navigation = () => (
  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/game">Play Game</Link>
    <Link to="/customize">Customize Tank</Link>
  </div>
);

function App() {
  // Use the useLocation hook to determine if we're on the landing page
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  return (
    <WebSocketProvider>
      <div className={`app-container ${isLandingPage ? 'full-screen' : ''}`}>
        {/* Only show navigation on non-landing pages */}
        {!isLandingPage && <Navigation />}
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GameCanvas />} />
          <Route path="/customize" element={<TankCustomization />} />
        </Routes>
      </div>
    </WebSocketProvider>
  );
}

// Use this wrapper to provide the Router context at the right level
export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}