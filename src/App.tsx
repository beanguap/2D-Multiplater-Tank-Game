// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameCanvas from './components/GameCanvas';
import TankCustomization from './components/TankCustomization';
import Leaderboard from './components/Leaderboard';
import { WebSocketProvider } from './contexts/WebSocketContext';

function App() {
  return (
    <WebSocketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GameCanvas />} />
          <Route path="/customize" element={<TankCustomization />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </WebSocketProvider>
  );
}

export default App;
